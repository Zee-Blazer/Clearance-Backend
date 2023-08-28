const express = require('express');
const router = express.Router();

const { StudentRec } = require('../../Models/student-clear.model');

router.get('/all-post', (req, res) => {
    StudentRec.find({ type: "postgraduate" })
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

router.get('/all-under', (req, res) => {
    StudentRec.find({ type: "undergraduate" })
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

router.get('/specific/:id', (req, res) => {
    StudentRec.findOne({ _id: req.params.id })
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

module.exports = router;
