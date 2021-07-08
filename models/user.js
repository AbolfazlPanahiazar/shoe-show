const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShcema = new Schema({
    phoneNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: false }
}, {
    timestamps: true,
    autoCreate: true
});

const userModel = mongoose.model("User", userShcema);

module.exports = userModel;