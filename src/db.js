const Datastore = require('nedb'),
  db = new Datastore({
    filename: process.env.DB_FILE_NAME ? process.env.DB_FILE_NAME : 'db.json',
    autoload: true,
  });
const logger = require('./logger');

const insert = (user) => {
  return new Promise((resolve, reject) => {
    db.insert(user, (err, doc) => {
      finalizePromise(resolve, reject, err, doc);
    });
  });
};

const getOne = (_id) => {
  return new Promise((resolve, reject) => {
    db.findOne({ _id }, (err, doc) => {
      finalizePromise(resolve, reject, err, doc);
    });
  });
};

const update = (_id, user) => {
  return new Promise((resolve, reject) => {
    db.update({ _id }, user, (err, doc) => {
      finalizePromise(resolve, reject, err, doc);
    });
  });
};

const remove = (_id) => {
  return new Promise((resolve, reject) => {
    db.remove({ _id }, (err, doc) => {
      finalizePromise(resolve, reject, err, doc);
    });
  });
};

const search = ({ genderParam, ageParam }) => {
  let filter = {};
  if (genderParam && genderParam.gender) {
    filter = { ...generateGenderFilter(genderParam) };
  }
  if (ageParam && ageParam.age != null && ageParam.age != undefined) {
    filter = { ...filter, ...generateAgeFilter(ageParam) };
  }

  logger.info(`Search filter generated ==> ${JSON.stringify(filter)}`);

  return new Promise((resolve, reject) => {
    db.find(filter, {}, (err, docs) => {
      finalizePromise(resolve, reject, err, docs);
    });
  });
};

const generateGenderFilter = ({ gender }) => {
  return { gender };
};

const generateAgeFilter = ({ age, isGreaterThan }) => {
  return isGreaterThan ? { age: { $gte: age } } : { age: { $lt: age } };
};

const finalizePromise = (resolve, reject, err, result) => {
  if (err) {
    logger.error(err);
    reject(err);
  } else {
    resolve(result);
  }
};

module.exports = {
  insert,
  getOne,
  remove,
  update,
  search,
};
