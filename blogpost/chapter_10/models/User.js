const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", async function(next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    const hashedPassword = await bcrypt.hash(user.password, 10)

    user.password = hashedPassword

    next();
})

const User = mongoose.model("User", userSchema);
module.exports = User