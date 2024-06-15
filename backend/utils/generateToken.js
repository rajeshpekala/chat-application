import jwt from "jsonwebtoken"
 

const generateTokenandSetCookie = (userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d',
    })

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly:true, //to prevent xss attacks
        sameSite: "strict", //to prevent csrf attacks and cross-site attacks
        secure: process.env.NODE_ENV!=="development"
    })
}

export default generateTokenandSetCookie;