const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    surname: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    role:{type: String, default:"User"}
})

const UserModel = mongoose.model('UserModel', userSchema)

module.exports = UserModel