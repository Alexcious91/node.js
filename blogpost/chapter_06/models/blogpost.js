const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    dataPosted: {
        type: String,
        default: new Date()
    }
});

const BlogPost = mongoose.model("Blogpost", BlogPostSchema);

module.exports = BlogPost