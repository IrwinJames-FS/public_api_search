const http = require('http');
const app = require('./app');
require('dotenv').config();


http.createServer(app).listen(process.env.port, () => console.log(`Service is listening on port ${process.env.port}`));