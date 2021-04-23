const { db } = require('./dbInstance');

const removeAll = () => {
  // db.remove({}, { multi: true }, (err, num) => {});
};

const userOne = () => {
  user = { name: 'Vince', age: 40, gender: 'male' };
  db.insert(user, (err, doc) => {
    if (err) console.log(err);
  });
};

const userTwo = () => {
  user = { name: 'Dosun', age: 15, gender: 'female' };
  db.insert(user, (err, doc) => {
    if (err) console.log(err);
  });
};

const userThree = () => {
  user = { name: 'John', age: 55, gender: 'male' };
  db.insert(user, (err, doc) => {
    if (err) console.log(err);
  });
};

const userFour = () => {
  user = { name: 'Tyler', age: 24, gender: 'male' };
  db.insert(user, (err, doc) => {
    if (err) console.log(err);
  });
};

const userFive = () => {
  user = { name: 'Bee', age: 25, gender: 'female' };
  db.insert(user, (err, doc) => {
    if (err) console.log(err);
  });
};

const setupDatabase = async () => {
  // await removeAll();
  await userOne();
  await userTwo();
  await userThree();
  await userFour();
  await userFive();
};

module.exports = {
  setupDatabase,
};
