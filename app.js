// env config
require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); 
app.use(compression()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
require("./db/connect");

// Clustering for better performance
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    // Routes
    app.use('/', require("./routes/apis"));

    // server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
