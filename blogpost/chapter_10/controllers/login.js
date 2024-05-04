const User = require('../models/User'); 
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            console.log("User not found.");
            return res.redirect('/auth/login');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (isPasswordMatch) {
            // Redirect to home page if passwords match
            return res.redirect('/');
        } else {
            console.log(`Password mismatch for user: ${username}`);
            return res.redirect('/auth/login');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
