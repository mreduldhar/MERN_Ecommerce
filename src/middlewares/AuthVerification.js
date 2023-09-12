const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{

    let token = req.headers['token'];
    jwt.verify(token, process.env.JWT_Secret, (err, decoded)=>{

        if(err){
            return res.status(401).json({
                status:"fail",
                message:"Unauthorized"
            })
        }
        else{
            let email = decoded['email']
            let id = decoded['id']
            req.headers.email = email;
            req.headers.id = id;

           next();
        }
    })

}