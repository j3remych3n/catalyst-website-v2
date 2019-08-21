const express = require('express');
const path = require('path');
const fs = require('fs-extra');
const { catalystDb, websiteV2 } = require('./airtable-init');

const app = express();
const port = process.env.PORT || 5000;

const MAX_BIO_LENGTH = 75;

// Fetch cached assets, if not found, call Airtable API & cache response
app.get('/api/members', (req, res) => smartRespond(req, res, getMembers));
app.get('/api/companies', (req, res) => smartRespond(req, res, getCompanies));
app.get('/api/grouppictures', (req, res) => smartRespond(req, res, getGroupPictures));
app.get('/api/faq', (req, res) => smartRespond(req, res, getFaq));
app.get('/api/wwd', (req, res) => smartRespond(req, res, getWWD));
app.get('/api/sync_airtable', (req, res) => syncAirtable());

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

function _getCacheFilePath(req) {
  const filename = req.originalUrl.split('/').pop();
  return path.join(__dirname, 'airtable-cache', `${filename}.json`);
}

// currently broken lol
function syncAirtable() {
  const airtableFunctions = [
    { fn: getMembers, req: { originalUrl: 'members' } },
    { fn: getCompanies, req: { originalUrl: 'companies' } },
    { fn: getGroupPictures, req: { originalUrl: 'grouppictures' } },
    { fn: getFaq, req: { originalUrl: 'faq' } },
    { fn: getWWD, req: { originalUrl: 'wwd' } },
  ];

  airtableFunctions.forEach(el => el.fn(el.req, {}, cacheJson));
}

// Wrapper for Airtable API calls that checks cache on fs before making Airtable call
function smartRespond(req, res, fn) {
  const jsonPath = _getCacheFilePath(req);
  let jsonResponse;

  if (fs.pathExistsSync(jsonPath)) {
    const fileContents = fs.readFileSync(jsonPath);
    jsonResponse = JSON.parse(fileContents);
    res.setHeader('Content-Type', 'application/json');
    res.send(jsonResponse);
  } else {
    fn(req, res, cacheAndSend);
  }
}

// Callback for Airtable API response (less messy with async tbh)
function cacheAndSend(req, res, json) {
  res.send(cacheJson(req, res, json));
}

// Caches response as json on fs & parses for image links to download
function cacheJson(req, res, json) {
  const jsonPath = _getCacheFilePath(req);
  const fileContents = JSON.stringify(json);
  fs.writeFileSync(jsonPath, fileContents);
  return json;
}

function getMembers(req, res, callback) {
  const TABLE_NAME = 'Roster';
  catalystDb(TABLE_NAME)
    .select()
    .all((err, data) => {
      callback(req, res, {
        members: data
          .map(member => member.fields)
          .filter(properties => properties.Status !== 'Alumnus') // needs to be updated in the Airtable annually
          .map(properties => ({
            name: properties.Name,
            imageSrc: properties.Photo ? properties.Photo[0].url : '',
            year: properties.Year,
            giturl: properties.Github,
            linkedinurl: properties.LinkedIn,
            bio: properties.Bio ? properties.Bio.substring(0, MAX_BIO_LENGTH) : '',
            personalurl: properties['Personal Website'],
          })),
      });
    });
}

function getCompanies(req, res, callback) {
  const TABLE_NAME = 'Companies';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      // Logo indexed at 0 because only 1 attachment (but could be array of multiple)
      callback(req, res, { logos: data.map(company => company.fields.Logo[0].url) });
    });
}

function getGroupPictures(req, res, callback) {
  const TABLE_NAME = 'Group Pictures';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      // images indexed at 0 because only 1 attachment (but could be array of multiple)
      callback(req, res, {
        pictures: data.map(picture => picture.fields.Picture[0].url),
      });
    });
}

function getFaq(req, res, callback) {
  const TABLE_NAME = 'FAQ';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      callback(req, res, { questions: data.map(faq => faq.fields) });
    });
}

function getWWD(req, res, callback) {
  const key = 'what we do';
  if (req.params) {
    const { key } = req.params;
  }
  const TABLE_NAME = 'General Info';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      callback(req, res, { text: data.map(description => description.fields) });
    });
}
