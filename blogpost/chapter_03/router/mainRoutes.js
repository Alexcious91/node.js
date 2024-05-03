const express = require("express");
const router = express.Router();
const path = require("path")

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../pages/index.html'));
});

router.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../pages/about.html'));
});

router.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../pages/contact.html"))
});

router.get("/post", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../pages/post.html"))
})

module.exports = router;