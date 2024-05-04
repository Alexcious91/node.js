const express = require("express");
const router = express.Router();
const path = require("path")
const BlogPost = require("../models/blogpost")
const fileUpload = require('express-fileupload')

// controllers
const homeController = require("../controllers/home");
const newPostController = require("../controllers/newPost")
const storePostController = require("../controllers/storePost");
const getPostController = require("../controllers/getPost")
// authentication
const newUserController = require("../controllers/newUser");
const getLoginController = require("../controllers/login");
const loginUserController = require("../controllers/loginUser")
const storeUserController = require("../controllers/storeUserController")

router.use(fileUpload())
router.use(express.static("public"));

router.get("/", homeController);

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/post", (req, res) => {
    res.render("post");
})

router.get("/auth/register", newUserController);
router.get("/auth/login", loginUserController);
router.post("/users/register", storeUserController)
router.post("/users/login", getLoginController);


router.get("/posts/new", newPostController)
router.get("posts:/id", getPostController)
router.post("/posts/store", storePostController);

module.exports = router;