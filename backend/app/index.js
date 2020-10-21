const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = class Application {
    constructor() {
        setServer();
        setConfig();
        setRoutes();
    };
};

const setServer = () => {
    const server = http.createServer(app);

    server.listen({ host: process.env.WEB_ADDRESS, port: process.env.WEB_PORT }, async () => {
        console.log(`server is running on port : ${process.env.WEB_PORT}`);

        try {
            const dbOpt = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };

            const db = await mongoose.connect(process.env.DATABASE_URI, dbOpt);

            !db ? console.log(`database has ERROR`) : console.log(`database successfully connected`);
        } catch (err) {
            console.log(`ERROR : ${err.message}`);
        };
    });
};

const setConfig = () => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(__dirname + '/public'))
};

const setRoutes = () => {
    app.use(require('./routes/routesIndex'));
};