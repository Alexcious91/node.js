const User = require("../models/User");

module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.session.userId)
        if (!user) {
            return res.redirect("/");
        }
        next();
    } catch(err) {
        console.error(err)
        console.log("User session not found")
    }
}