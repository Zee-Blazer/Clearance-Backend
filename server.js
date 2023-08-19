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

// Creating a new admin
app.post("/admin", (req, res) => {
    const admin = new Admin(req.body);

    admin.save()
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.send(400).send(err) );
})

app.post('/check-admin', (req, res) => {
    Admin.findOne({ admin: req.body.admin })
    .then( doc => res.status(200).json({auth: true, doc}) )
    .catch( err => res.status(400).send(err) );
})

// Creating a new student for clearance
app.post('/new-student-clear', (req, res) => {
    const studentClear = new StudentClear(req.body);

    studentClear.save()
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

// All students that can be cleared
app.post('/student-record', (req, res) => {
    const studentRecord = new StudentRecord(req.body);

    studentRecord.save()
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port${port}`))
