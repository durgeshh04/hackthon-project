const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure email is unique
    },
    password: { // Fixed typo from 'pasword' to 'password'
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: "Role",
        required: true,
    },
    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);
