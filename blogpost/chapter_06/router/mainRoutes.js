const express = require("express");
const router = express.Router();
const path = require("path")
const BlogPost = require("../models/blogpost")

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
    const { username, title, body } = req.body;
    BlogPost.create({
        username: username,
        title: title,
        body: body
    })
    .then(savedPost => {
        console.log(`Successfully saved blogpost: ${savedPost.title}`);
        res.redirect("/");
    })
    .catch(err => {
        console.log(`Error saving your post: ${err.message}`);
        res.status(500).send("Error saving your post");
    });
});


module.exports = router;