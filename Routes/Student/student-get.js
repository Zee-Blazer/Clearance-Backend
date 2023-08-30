const express = require('express');
const router = express.Router();

const { StudentRec } = require('../../Models/student-clear.model');

router.get('/all-post-verified', (req, res) => {
    StudentRec.find({ type: "postgraduate", valid: true })
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

router.get('/all-post-unverified', (req, res) => {
    StudentRec.find({ type: "postgraduate", valid: false })
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

router.get('/all-under-verified', (req, res) => {
    StudentRec.find({ type: "undergraduate", valid: true })
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

router.get('/all-under-unverified', (req, res) => {
    StudentRec.find({ type: "undergraduate", valid: false })
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

router.get('/specific/:id', (req, res) => {
    StudentRec.findOne({ _id: req.params.id })
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

module.exports = router;
