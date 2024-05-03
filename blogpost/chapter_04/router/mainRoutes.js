const express = require("express");
const router = express.Router();
const path = require("path")

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/post", (req, res) => {
    res.render("post");
})

module.exports = router;