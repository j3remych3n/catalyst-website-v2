function getMembers(req, res) {
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

function getCompanies(req, res) {
  const TABLE_NAME = 'Companies';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      // Logo indexed at 0 because only 1 attachment (but could be array of multiple)
      res.send({ logos: data.map(company => company.fields.Logo[0].url) });
    });
}

function getGroupPictures(req, res) {
  const TABLE_NAME = 'Group Pictures';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      // images indexed at 0 because only 1 attachment (but could be array of multiple)
      res.send({
        pictures: data.map(picture => picture.fields.Picture[0].url),
      });
    });
}

function getFaq(req, res) {
  const TABLE_NAME = 'FAQ';
  websiteV2(TABLE_NAME)
    .select()
    .all((err, data) => {
      res.send({ questions: data.map(faq => faq.fields) });
    });
}

function getWWD(key, req, res) {
  const { key } = req.params;
  const TABLE_NAME = 'General Info';
  websiteV2(TABLE_NAME)
    .select({ filterByFormula: `FIND("${key}",Key)` })
    .all((err, data) => {
      res.send({ val: data[0].fields.Value });
    });
}
