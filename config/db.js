const mongoose = require('mongoose');
const config = require('./config');
require('colors');

const connectDB = async () => {
  try {
    const url = config.db.url;
    await mongoose.connect(url, {});
    console.log(`Database Connected Successfully...`.bgMagenta);
  } catch (error) {
    console.error('Database Connection Error', error);
    process.exit(1);
  }
};

module.exports = connectDB;
