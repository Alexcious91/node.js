const User = require("../models/User")

const storeUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.redirect("/");
    } catch (err) {
        const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message)
        req.flash('validationErrors', validationErrors)
        // req.session.validationErrors = validationErrors
        req.flash('data', req.body)
        console.error(`Error creating user: ${err.message}`)
        res.redirect("/auth/register");
    }
}

module.exports = storeUser