const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    admin: String,
    password: String,
    token: String
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Admin };
