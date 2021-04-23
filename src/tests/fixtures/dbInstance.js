const Datastore = require('nedb');
const db = new Datastore({
  filename: process.env.DB_FILE_NAME,
  autoload: true,
});

db.remove({}, { multi: true }, (err, num) => {});

module.exports = { db };
