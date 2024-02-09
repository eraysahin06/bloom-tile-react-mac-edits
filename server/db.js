
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const connectToMongoDB = async () => {
    try {
      await mongoose.connect(`mongodb+srv://eraysahinmoon:${process.env.MONGO_PW}@cluster0.dickyb3.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
})

db.once('open', () => {
    console.log('Successfully connected to MongoDB.');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

module.exports = connectToMongoDB;