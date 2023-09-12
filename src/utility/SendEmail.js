const nodemailer = require('nodemailer');

const SendEmail= async (EmailTo, EmailText, EmailSubject) => {

   try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            }
        });

        let mailOptions = {
            from: 'MERN Ecommerce <mredulkanthydhar@gmail.com>',
            to: EmailTo,
            subject: EmailSubject,
            text: EmailText
        };

        return  await transporter.sendMail(mailOptions)
   } catch (error) {
        console.log(error)
   }
}

module.exports = SendEmail;