const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    admin: String,
    password: String
})

const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Admin };
