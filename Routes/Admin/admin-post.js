const express = require('express');
const router = express.Router();

const { Admin } = require('../../Models/admin.model');

// Creating a new admin
router.post("/signup", (req, res) => {
    const admin = new Admin(req.body);

    admin.save()
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.send(400).send(err) );
});

// Login Admin
router.post('/login', (req, res) => {

    Admin.findOne({ admin: req.body.admin })
    .then( (user) => {
        if(user.password == req.body.password) res.status(200).send(user)
        else res.status(400).send("Error")
    })
    .catch( err => res.status(400).send(err) );

})

module.exports = router;
