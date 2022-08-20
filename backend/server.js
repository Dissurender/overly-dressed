const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const server = express();

const PORT = process.env.PORT || 5000;
server.use(express.urlencoded({ extended: true }))

server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORTls}`));