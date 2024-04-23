const express = require('express')
const dbConnection = require('./config/db')
const Config = require('./config')
const app = express()

const PORT = Config.PORT || 5000;

// dbConnection
dbConnection()


// routes


// listen
app.listen(PORT, (err) => {
    if (err) {
        console.log('server is not connected');
    }
    console.log(`Listing on port http://localhost:${PORT}`);
})