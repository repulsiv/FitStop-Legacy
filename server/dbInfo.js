var dbUri = require('./config');

var dbUri = dbUri.local || dbUri.heroku;

module.exports.dbUri = dbUri;