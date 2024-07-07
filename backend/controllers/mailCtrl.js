const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");




// send mail
exports.send = async (req,res) => {

    const { email, title } = req.body;
    // console.log('Received email:', email);
    // console.log('Received bookTitle:', title);
  

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Book Request Approved !!",
            html: `<h1>Congratulation</h1> <p>Your request for the book titled <strong>${title}</strong> has been approved.</p>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
};


