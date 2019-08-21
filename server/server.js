const express = require('express');
const path = require('path');
const cache = require('./util/caching.js');
const airtable = require('./util/airtableRequests.js');

const app = express();
const port = process.env.PORT || 5000;

// Fetch cached assets, if not found, call Airtable API & cache response
app.get('/api/members', (req, res) => cache.respond(req, res, airtable.getMembers));
app.get('/api/companies', (req, res) => cache.respond(req, res, airtable.getCompanies));
app.get('/api/grouppictures', (req, res) => cache.respond(req, res, airtable.getGroupPictures));
app.get('/api/faq', (req, res) => cache.respond(req, res, airtable.getFaq));
app.get('/api/wwd/:key', (req, res) => cache.respond(req, res, airtable.getWWD));

// Cache reset functions; TODO require access token to protect
app.get('/admin/sync_airtable', (req, res) => {
  cache.syncAirtable();
  res.sendStatus(200);
});
app.get('/admin/reset', (req, res) => {
  cache.reset();
  res.sendStatus(200);
});

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
