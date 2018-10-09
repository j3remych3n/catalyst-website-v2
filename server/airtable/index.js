const Airtable = require('airtable');

require('dotenv').config();

const { AIRTABLE_API_KEY, AIRTABLE_BASE_KEY } = process.env;

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_KEY) {
  // eslint-disable-next-line no-console
  console.log('Error: Specify AIRTABLE_API_KEY and AIRTABLE_BASE_KEY in a .env file');
  process.exit(1);
}

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_API_KEY,
});

// allows accessing tables directly
module.exports = { base: Airtable.base(AIRTABLE_BASE_KEY) };
