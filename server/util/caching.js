const fs = require('fs-extra');
const path = require('path');
const request = require('request');

const airtable = require('./airtableRequests.js');

const CACHE_DIR = path.join(__dirname, '../airtable-cache');
const IMAGE_DIR = path.join(__dirname, '../../client/public/images');
const IMAGE_SUFFIXES = ['.jpg', 'jpeg', '.png', '.gif'];

const getCacheFilePath = (req) => {
  let filename = req.originalUrl.split('/').pop();
  // WWD is bad api, used differently
  if (filename === 'wwd') {
    filename = req.params.key;
  }
  return path.join(CACHE_DIR, `${filename}.json`);
};

// Caches response as json on fs & parses for image links to download
const cache = (req, res, obj) => {
  const jsonPath = getCacheFilePath(req);
  const [imgUrls, newObj] = parseImagesFromJson(obj);
  const fileContents = JSON.stringify(newObj);
  fs.writeFileSync(jsonPath, fileContents);
  cacheImages(imgUrls);
  return newObj;
};

const parseImagesFromJson = (obj) => {
  let imgUrls = [];
  let strings = JSON.stringify(obj).split('"');
  let newStrings = [];
  for (let str of strings) {
    if (IMAGE_SUFFIXES.includes(str.substr(-4).toLowerCase())) {
      imgUrls.push(str);
      str = `/images/${str.split('/').pop()}`;
    }
    newStrings.push(str);
  }
  const newObj = JSON.parse(newStrings.join('"'));
  // return [imgUrls, newObj];
  return [imgUrls, obj];
}

// Parse image links from json, download images & return modified json
const cacheImages = (imgUrls) => {
  for (let url of imgUrls) {
    const filename = url.split('/').pop();
    request(url).pipe(fs.createWriteStream(path.join(IMAGE_DIR, filename)));
  }
}
// Callback for Airtable API response (less messy with async tbh)
const cacheAndSend = (req, res, obj) => {
  res.send(cache(req, res, obj));
};

// Wrapper for Airtable API calls that checks cache on fs before making Airtable call
const respond = (req, res, fn) => {
  const jsonPath = getCacheFilePath(req);
  let jsonResponse;

  if (fs.pathExistsSync(jsonPath)) {
    const fileContents = fs.readFileSync(jsonPath);
    jsonResponse = JSON.parse(fileContents);
    res.setHeader('Content-Type', 'application/json');
    res.send(jsonResponse);
  } else {
    fn(req, res, cacheAndSend);
  }
};

// currently broken lol
const syncAirtable = () => {
  // Hardcoded request body to get appropriate Airtable response
  const airtableFunctions = [
    { fn: airtable.getMembers, req: { originalUrl: 'members' } },
    { fn: airtable.getCompanies, req: { originalUrl: 'companies' } },
    { fn: airtable.getGroupPictures, req: { originalUrl: 'grouppictures' } },
    { fn: airtable.getFaq, req: { originalUrl: 'faq' } },
    { fn: airtable.getWWD, req: { originalUrl: 'wwd', params: { key: 'what_we_do' } } },
    { fn: airtable.getWWD, req: { originalUrl: 'wwd', params: { key: 'who_we_are' } } },
  ];
  airtableFunctions.forEach(el => el.fn(el.req, {}, cache));
};

// HArd reset of cache; deletes cache and resyncs fully
const reset = () => {
  fs.removeSync(CACHE_DIR);
  fs.removeSync(IMAGE_DIR);
  fs.mkdirSync(CACHE_DIR);
  fs.mkdirSync(IMAGE_DIR);
  syncAirtable();
};

module.exports = {
  respond,
  syncAirtable,
  reset,
};
