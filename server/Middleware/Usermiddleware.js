/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const authenticationWithRole =(role)=>{
    return (req,res,next)=>{
    try{
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
        const token = req.headers.authorization.split(' ')[1];
        if(!token)
        {
         return res.status(401).json({message: "Access denied!"});
        }
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err)
        {
            return res.status(403).json({message: "invalid token"})
        }
        if(role.includes(user.role))
        {
            next();
        }
        else{
            res.status(404).json({error: "Unauthorized attempt to access the content"})
        }
    })
    }
    catch(error)
    {
        res.status(500).json({error: "Internal Server error"});
    }
}
}

module.exports = authenticationWithRole;