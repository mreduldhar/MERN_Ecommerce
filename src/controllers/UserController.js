const SendEmailUtility = require("../utility/SendEmail");
const UserModel = require("../models/UserModel");

exports.UserLogin = async (req,res) =>{

    let email = req.params.email;
    let code = Math.floor(100000 + Math.random() * 900000);
    let EmailText = "Your One Time Password is " + code;

    try {
        await SendEmailUtility(email, EmailText, "Email Verification")

        await UserModel.updateOne({email:email}, {$set:{otp:code}}, {upsert:true})

        return res.status(200).json({
            status: 'Success',
            message: "Six digit OTP has been Sent"
        })

    } catch (error) {
        console.log(error)
        return res.status(200).json({
            status: 'Fail',
            message: "Something went wrong"
        }) 
    }

    

}


exports.VerifyLogin = async (req,res) =>{


    return res.status(200).json({
        success: true,
        message: "VerifyLogin"
    })

}


exports.UserLogout = async (req,res) =>{


    return res.status(200).json({
        success: true,
        message: "UserLogout"
    })

}