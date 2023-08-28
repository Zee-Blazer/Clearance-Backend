const express = require("express");
const mongoose = require("mongoose");

// Admin Model
const { Admin } = require('./Models/admin.model');

// Student clear Model
const { StudentClear, StudentRecord } = require('./Models/student-clear.model');

require('dotenv').config();

const app = express();

app.use(express.json())

mongoose.connect(
    process.env.MONGODB_URL
)

// Admin Post Requests
app.use("/admin", require("./Routes/Admin/admin-post"));

// Student Record Post Requests
app.use("/student", require('./Routes/Student/student-post'));

// Student Record Get Requests
app.use("/student", require('./Routes/Student/student-get'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port${port}`))
