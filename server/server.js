const express = require('express');
const path = require('path');
const { catalystDb } = require('./airtable-init');

const app = express();
const port = process.env.PORT || 5000;

// API calls
app.get('/api/members', (req, res) => {
  const TABLE_NAME = 'Roster';
  catalystDb(TABLE_NAME)
    .select()
    .all((err, data) => {
      res.send({ names: data.map(member => member.fields.Name).filter(name => name) });
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
