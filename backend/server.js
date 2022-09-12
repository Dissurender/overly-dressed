const express = require('express')
const loadClothesRoutes = require('./routes/clothes');
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const authRoute = require("./routes/auth")
const connectDB = require('./config/db')
const { env } = require('process');

require('dotenv').config({ path: './config/.env' })

// Passport config
require('./config/passport')(passport)

connectDB()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: env.MONGO_URI }),
    })
)
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//Routing
loadClothesRoutes(app);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})    