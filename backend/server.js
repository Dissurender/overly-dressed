const express = require('express');
const dotenv = require('dotenv');
const { application } = require('express');
dotenv.config({ path: './config/config.env' });
const server = express();
const passport = require('passport');
const session = require('express-session');
const PORT = process.env.PORT || 5000;

require('./config/passport')(passport)

//Sessions
server.use(session({
    secret: '',
    resave: false,
    saveUnitia
}))

//Middleware
server.use(passport.initialize)
server.use(passport.session())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
    res.json({
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    })
});



server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));