const mongoose = require("mongoose");

const mongoURL = 'mongodb://localhost:27017/hotelDB';

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => console.log("Database Connection Successful."));

db.on('error', () => console.log("Database Connection Error."));

db.on('disconnected', () => console.log("Database Dsiconnected."));

module.exports = db;