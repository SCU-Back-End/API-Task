require('dotenv').config();
const mongoose = require('mongoose');

const connect_to_database = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        console.error('MONGO_URI not defined in .env');
        process.exit(1);
    }
    try {
        await mongoose.connect(uri);
        console.log('Connected successfully to DB');
    } catch (error) {
        console.error('Connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connect_to_database;
