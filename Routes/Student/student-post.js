const express = require('express');
const router = express.Router();
const twilio = require('twilio');

require('dotenv').config();

// Node mailer
const nodemailer = require('nodemailer');

const { StudentRec } = require('../../Models/student-clear.model');

// Create New Student Record
router.post('/new', (req, res) => {
    const studentRec = new StudentRec(req.body);

    studentRec.save()
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
});

router.post('/additional', (req, res) => {
    StudentRec.findOneAndUpdate( { matric: req.body.matric }, req.body )
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

router.post("/approve", (req, res) => {
    StudentRec.findOneAndUpdate( { matric: req.body.matric }, { cleared: true } )
    .then( doc => res.status(200).send(doc) )
    .catch( err => res.status(400).send(err) );
})

router.post('/send-email', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use your email service (e.g., Gmail, SMTP)
        auth: {
          user: 'ganiyu.bolaji@binghamuni.edu.ng', // Replace with your email address
          pass: 'Bingham@123',  // Replace with your email password or app-specific password
        },
      });
      
      // Define email data
      const mailOptions = {
        from: 'ganiyu.bolaji@binghamuni.edu.ng',
        to: 'ganiyu.bolaji.bo@gmail.com',
        subject: req.body.subject,
        text: req.body.text,
      };

      // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error('Error sending email:', error);
        res.status(400).send("There was an error sending Email")
        } else {
        console.log('Email sent:', info.response);
        res.status(200).send("Email sent successfully")
        }
    });
})

router.post('/send-sms', (req, res) => {
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

    client.messages.create({
        body: req.body.msg,
        from: "+19285850641",
        to: "+2348139077093"
    })
    .then( message => res.status(200).send(message) )
    .catch( err => res.status(400).send(err) );
    
})

module.exports = router;
