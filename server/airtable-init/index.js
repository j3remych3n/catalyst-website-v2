const Airtable = require('airtable');

require('dotenv').config();

const { AIRTABLE_API_KEY, CATALYSTDB_BASE_KEY } = process.env;

if (!AIRTABLE_API_KEY || !CATALYSTDB_BASE_KEY) {
  // eslint-disable-next-line no-console
  console.log(
    "Error/note from Ben:\n1. Create a file 'catalyst-website-v2/server/.env'.\n2. Inside that file, create the requisite variables failing this condition in separate lines as detailed here: https://www.npmjs.com/package/dotenv#usage.",
  );
  process.exit(1);
}

const AirtableAPIObj = new Airtable({ apiKey: AIRTABLE_API_KEY });

// export individual tables
module.exports = {
  catalystDb: AirtableAPIObj.base(CATALYSTDB_BASE_KEY),
};
