const BlogPost = require("../models/blogpost");
const path = require("path")

module.exports = (req, res) => {
    let image = req.files.image;
    console.log(image);
    image.mv(path.resolve(__dirname, '../public/assets/img', image.name), async (error) => {
        await BlogPost.create({
            ...req.body,
            image: "/assets/img/" + image.name,
            userid: req.session.userId
        })

        if (error) {
            console.error(error.stack)
        }
        res.redirect('/')
    });
}
