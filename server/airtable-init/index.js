const Airtable = require('airtable');

require('dotenv').config();

const { AIRTABLE_API_KEY, CATALYSTDB_BASE_KEY } = process.env;

if (!AIRTABLE_API_KEY || !CATALYSTDB_BASE_KEY) {
  // eslint-disable-next-line no-console
  console.log('Error: Specify AIRTABLE_API_KEY and AIRTABLE_BASE_KEY in a .env file');
  process.exit(1);
}

const APIObj = new Airtable({ apiKey: AIRTABLE_API_KEY });

// export individual tables
module.exports = {
  catalystDb: APIObj.base(CATALYSTDB_BASE_KEY),
};
