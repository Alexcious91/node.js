const express = require("express");
const router = express.Router();
const path = require("path")
const BlogPost = require("../models/blogpost")
const fileUpload = require('express-fileupload')

router.use(fileUpload())
router.use(express.static("public"));

router.get("/", async (req, res) => {
    const blogposts = await BlogPost.find({})
    // console.log(blogposts)   
    res.render("index", {
        blogposts: blogposts
    });
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

router.get("/post/:id", async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id);
    res.render("post", {
        blogpost: blogpost
    })
})

router.get("/posts/new", (req, res) => {
    res.render("create")
})

router.post("/posts/store", (req, res) => {
    let image = req.files.image;
    console.log(image);
    image.mv(path.resolve(__dirname, '../public/assets/img', image.name), async (error) => {
        await BlogPost.create({
            ...req.body,
            image: "/assets/img/" + image.name
        })

        if (error) {
            console.error(error.stack)
        }
        res.redirect('/')
    })
});


module.exports = router;