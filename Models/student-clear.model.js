const mongoose = require("mongoose");

const studentRecSchema = mongoose.Schema({
    fullname: String,
    matric: String,
    department: String,
    type: String,
    email: String,
    phone: String,
    valid: Boolean,
    requirements: [
        {section: String, cleared: String}
    ],
    cleared: Boolean
});

const StudentRec = mongoose.model("Student-clear", studentRecSchema);

module.exports = { StudentRec };
