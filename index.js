const loaders = require('./loaders/index');
const config = require("./config/index");
const express = require('express');

const test = require('./api/Test/router');

async function startServer() {
    const app = express();
     
    await loaders(app);

    // router
    app.use('/test', test);

    app.listen(config.port, (err)=>{
        if (err) {
            console.log(err);
        }
        console.log('Your server is ready');
    });
}

startServer();