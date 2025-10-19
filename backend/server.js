require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session')
const passportSetUp = require('./passport');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const marketRoute = require('./routes/market');
const app = express();
const connectDB = require('./db');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
    session({
        secret: "My First Project",
        resave: false,
        saveUninitialized: true,
        cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

connectDB();

app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/market", marketRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});