const { catalystDb, websiteV2 } = require('../airtable-init');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const compress_images = require('compress-images');

const FULLSIZE_IMAGE_LOCATION = __dirname + '/../../full_member_images/';
const COMPRESSED_IMAGE_LOCATION = FULLSIZE_IMAGE_LOCATION + '/../compressed_images/';
const MAX_BIO_LENGTH = 75;

const getMembers = (req, res, callback) => {
  const TABLE_NAME = 'Roster';

  catalystDb(TABLE_NAME)
    .select()
    .all((err, data) => {
      callback(req, res, {
        members: data
          .map(member => member.fields)
          .map((properties) => {
            downloadAndCompress(properties);
            return properties;
          })
          .filter(properties => properties.Status !== 'Alumnus') // needs to be updated in the Airtable annually
          .map(properties => {
            let name = properties.Name;
            console.log("name: ", name)
            let filename = name.replace(/\s+/g, '-').toLowerCase();
            return {
              name: name, 
              imageSrc: '/api/member/' + filename,
              year: properties.Year,
              giturl: properties.Github,
              linkedinurl: properties.LinkedIn,
              bio: properties.Bio ? properties.Bio.substring(0, MAX_BIO_LENGTH) : '',
              personalurl: properties['Personal Website'],
            }
          }),
      });
    });
};

const downloadAndCompress = async (properties) => {
  let url = properties.Photo ? properties.Photo[0].url : '';
  if (url !== '') {
    // replace names with hyphenated lower case (Kevin Fang --> kevin-fang)
    let filename = properties.Name.replace(/\s+/g, '-').toLowerCase() + '.jpg';
    let filepath = path.resolve(FULLSIZE_IMAGE_LOCATION, filename);
    // console.log('filepath: ', filepath)
    let writer = fs.createWriteStream(filepath)
    let response = await axios.get(url, { responseType: 'stream' })
    response.data.pipe(writer);
    writer.on('finish', () => {
      // console.log('compressing', filepath, 'to', COMPRESSED_IMAGE_LOCATION);
      compress_images(filepath.replace(/\\/g, '/'), COMPRESSED_IMAGE_LOCATION.replace(/\\/g, '/'), {compress_force: false, statistic: true, autoupdate: false}, true, 
                                      {jpg: {engine: 'mozjpeg', command: ['-quality', '50']}},
                                      {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                      {svg: {engine: 'svgo', command: '--multipass'}},
                                      {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, (err, complete, stat) => {
          // console.log('-------------');
          // console.log(err);
          // console.log(complete);
          // console.log(stat);
          // console.log('-------------'); 
        })
    })
  }
  return properties;
}

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
