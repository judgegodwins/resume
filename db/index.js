
const mongoose = require('mongoose');
const { dbConfig } = require('../config');

const dbURI = process.env.NODE_ENV == "development"
  ? `mongodb://${dbConfig.user}:${encodeURIComponent(dbConfig.password)}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`
  : process.env.DB_URI  

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}

exports.connect = async () => {
  await mongoose.connect(dbURI, options)

  mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });
}