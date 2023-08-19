const mongoose = require("mongoose");

const studentClearSchema = mongoose.Schema({
    fullname: String,
    matric: String,
    degree: String,
    phone: Number,
    cleared: Boolean
})

const studentrecordSchema = mongoose.Schema({
    fullname: String,
    matric: String,
    department: Boolean,
    library: Boolean,
    sport: Boolean,
    clinic: Boolean,
    hostel: Boolean,
    security: Boolean,
    busary: Boolean,
    alumni: Boolean,
    postgraduate: Boolean
})

const StudentClear = mongoose.model("Student-clear", studentClearSchema);
const StudentRecord = mongoose.model("StudentRecord", studentrecordSchema);

module.exports = { StudentClear, StudentRecord };
