const User = require("../models/User")
const path = require('path')

const storeUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.redirect("/");
    } catch(err) {
        console.error(`Error creating user: ${err.message}`)
        res.redirect("/auth/register");
    }
}


module.exports = storeUser