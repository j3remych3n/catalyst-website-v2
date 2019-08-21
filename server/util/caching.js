const fs = require('fs-extra');
const path = require('path');

const airtable = require('./airtableRequests.js');

const CACHE_DIR = path.join(__dirname, '../airtable-cache');
const IMAGE_DIR = path.join(CACHE_DIR, 'images');

const getCacheFilePath = (req) => {
  let filename = req.originalUrl.split('/').pop();
  // WWD is bad api, used differently
  if (filename === 'wwd') {
    filename = req.params.key;
  }
  return path.join(CACHE_DIR, `${filename}.json`);
};

// Caches response as json on fs & parses for image links to download
const cacheJson = (req, res, obj) => {
  const jsonPath = getCacheFilePath(req);
  const fileContents = JSON.stringify(obj);
  fs.writeFileSync(jsonPath, fileContents);

  return obj;
};

// Callback for Airtable API response (less messy with async tbh)
const cacheAndSend = (req, res, json) => {
  res.send(cacheJson(req, res, json));
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
  airtableFunctions.forEach(el => el.fn(el.req, {}, cacheJson));
};

// HArd reset of cache; deletes cache and resyncs fully
const reset = () => {
  fs.removeSync(CACHE_DIR);
  fs.mkdirSync(CACHE_DIR);
  fs.mkdirSync(IMAGE_DIR);
  syncAirtable();
};

module.exports = {
  respond,
  syncAirtable,
  reset,
};
