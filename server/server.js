const express = require('express');
const path = require('path');
const { catalystDb, websiteV2 } = require('./airtable-init');

const app = express();
const port = process.env.PORT || 5000;

const MAX_BIO_LENGTH = 75;

// API calls
app.get('/api/members', (req, res) => {
  const TABLE_NAME = 'Roster';
  catalystDb(TABLE_NAME)
    .select()
    .all((err, data) => {
      res.send({
        members: data
          .map(member => member.fields)
          .filter(properties => properties.Status !== 'Alumnus') // needs to be updated in the Airtable annually
          .map(properties => ({
            name: properties.Name,
            imageSrc: properties.Photo[0].url,
            year: properties.Year,
            giturl: properties.Github,
            linkedinurl: properties.LinkedIn,
            bio: properties.Bio
              ? properties.Bio.substring(0, MAX_BIO_LENGTH)
              : 'This is a default bio that is used for testing.',
            personalurl: properties['Personal Website'],
          })),
      });
    });
});

app.get('/api/companies', (req, res) => {
  const TABLE_NAME = 'Companies';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      // Logo indexed at 0 because only 1 attachment (but could be array of multiple)
      res.send({ logos: data.map(company => company.fields.Logo[0].url) });
    });
});

app.get('/api/grouppictures', (req, res) => {
  const TABLE_NAME = 'Group Pictures';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      // images indexed at 0 because only 1 attachment (but could be array of multiple)
      res.send({
        pictures: data.map(picture => picture.fields.Picture[0].url),
      });
    });
});

app.get('/api/faq', (req, res) => {
  const TABLE_NAME = 'FAQ';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      res.send({ questions: data.map(faq => faq.fields) });
    });
});

app.get('/api/wwd/:key', (req, res) => {
  const { key } = req.params;
  const TABLE_NAME = 'General Info';
  websiteV2(TABLE_NAME)
    .select({ filterByFormula: `FIND("${key}",Key)` })
    .all((err, data) => {
      res.send({ val: data[0].fields.Value });
    });
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
