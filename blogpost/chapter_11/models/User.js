const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please provide username"],
        unique:true
    },
    password: {
        type: String,
        required: [true, "Please provide password"]
    }
});

userSchema.plugin(uniqueValidator)

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