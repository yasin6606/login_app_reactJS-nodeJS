const http = require('http');
const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const socketIo = require('socket.io');

module.exports = class Application {
    constructor() {
        setServer();
        setConfigs();
        setRoutes();
    };
};

// setting up web server and connect to mongoose
const setServer = () => {
    const server = http.createServer(app);

    server.listen({ host: process.env.WEB_SERVER_HOST, port: process.env.WEB_SERVER_PORT || 5004 }, async () => {
        console.log(`web server successfully listening on ${process.env.WEB_SERVER_HOST} : ${process.env.WEB_SERVER_PORT}`)
        // mongoose database connections
        try {
            const mongooseOpt = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                dbName: process.env.DATABASE_NAME,
            }
            const db = await mongoose.connect(process.env.MONGOOSE_DATABASE_URI, mongooseOpt);
            !db ? console.log(`mongoose has Error`) : console.log(`mongoose successfully connected`);
        } catch (err) {
            console.log(`mongoose has Error => ${err.message}`);
        };
    });
};

// setting up configurations of web server
const setConfigs = () => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(__dirname + '/public'));
};

// setting up application api routes
const setRoutes = () => app.use(routes);