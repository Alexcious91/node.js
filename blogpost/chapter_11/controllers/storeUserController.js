const User = require("../models/User")

const storeUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.redirect("/");
    } catch(err) {
        const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message)
        req.flash('validationErrors', validationErrors)
        req.flash('data',req.body)
        console.error(`Error creating user: ${err.message}`)
        res.redirect("/auth/register");
    }
}

// module.exports = async (req, res) => {
//     try {
//         const storeUser = await User.create(req.body)
//         if (error) {
//             const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)

//             console.error(`Error creating user: ${err.message}`)
//             req.flash('validationErrors', validationErrors)
//             return res.redirect('/auth/register')
//         }
//         res.redirect('/')
//     } catch(err) {
//         console.error(err)
//     }
// }

module.exports = storeUser