const { catalystDb, websiteV2 } = require('../airtable-init');

const MAX_BIO_LENGTH = 75;

const getMembers = (req, res, callback) => {
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
};

const getCompanies = (req, res, callback) => {
  const TABLE_NAME = 'Companies';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      // Logo indexed at 0 because only 1 attachment (but could be array of multiple)
      callback(req, res, { logos: data.map(company => company.fields.Logo[0].url) });
    });
};

const getGroupPictures = (req, res, callback) => {
  const TABLE_NAME = 'Group Pictures';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      // images indexed at 0 because only 1 attachment (but could be array of multiple)
      callback(req, res, {
        pictures: data.map(picture => picture.fields.Picture[0].url),
      });
    });
};

const getFaq = (req, res, callback) => {
  const TABLE_NAME = 'FAQ';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      callback(req, res, { questions: data.map(faq => faq.fields) });
    });
};

const getWWD = (req, res, callback) => {
  const { key } = req.params;
  const TABLE_NAME = 'General Info';
  websiteV2(TABLE_NAME)
    .select({ filterByFormula: `FIND("${key}",Key)` })
    .all((err, data) => {
      callback(req, res, { val: data[0].fields.Value });
    });
};

module.exports = {
  getMembers,
  getCompanies,
  getGroupPictures,
  getFaq,
  getWWD,
};
