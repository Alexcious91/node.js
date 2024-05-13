const expressSession = require("express-session");
const express = require("express");
const app = express();

const setupSessionMiddleware = expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
});


module.exports = setupSessionMiddleware