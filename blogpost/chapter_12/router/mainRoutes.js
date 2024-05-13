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
const newUserController = require("../controllers/newUser");
const loginUserController = require("../controllers/loginUser");
const loginController = require("../controllers/login")
const storeUserController = require("../controllers/storeUserController");
const logoutController = require("../controllers/logout");

// authentication
const authMiddleware = require("../middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("../middleware/redirectIfAuthenticatedMiddleware");

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

router.get("/auth/register", redirectIfAuthenticatedMiddleware, newUserController);
router.post("/users/register", redirectIfAuthenticatedMiddleware, storeUserController)
router.get("/auth/login", redirectIfAuthenticatedMiddleware, loginController);
router.post("/users/login", redirectIfAuthenticatedMiddleware, loginUserController);

router.get("/auth/logout", logoutController)

router.get("/posts/new", authMiddleware, newPostController)
router.post("/posts/store", authMiddleware, storePostController);
router.get("posts:/id", getPostController)

module.exports = router;