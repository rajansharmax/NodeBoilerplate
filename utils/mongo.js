const { MongoClient } = require('mongodb');
const url = process.env.MONGO_URI || "mongodb://localhost:27017";

const client = new MongoClient(url);

async function connect() {
    try {

        const connection = await client.connect();
        let db = connection.db('ecommerce');
        return db;

    }catch(e) {
        console.log('Error while connecting to MongoDB');
        console.log(e);
    }
}

connect().then((db) => {
    console.log('Connected to MongoDB');
});

module.exports = { connect };