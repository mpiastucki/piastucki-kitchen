const pouchdb = require('pouchdb');

var db = new pouchdb('recipes-db')

exports.db = db
