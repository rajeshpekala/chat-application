import User from "../models/user_model.js";
import bcrypt from "bcryptjs"
import generateTokenandSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, gender, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //hashpassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);


    //https://avatar.iran.liara.run/public/boy

    const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password:hashedPassword,
      gender,
      profilePic:gender === "male" ? boyProfilePic : girlProfilePic
    })
 if(newUser){
  
  //Generating JWT token
   generateTokenandSetCookie(newUser._id,res)
  await newUser.save();
    

    res.status(201).json({
      _id: newUser._id,
      fullName:newUser.fullName,
      userName:newUser.username,
      profilePic:newUser.profilePic
    })
  }
    else{
      res.status(400).json({error:"Invalid User data"})
    }
  } catch (error) {
    console.log("Error in signUp controller",error.message);
    res.status(500).json({error:"Internal server error"})
  }
};

export const login = async (req, res) => {
try {
  const {username,password} = req.body
  const user  = await User.findOne({username});
  const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")

  if(!user || !isPasswordCorrect){
    return res.status(400).json({error:"Invalid Credenetials"});
  }
generateTokenandSetCookie(user._id,res);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.username,
      profilePic: user.profilePic,
    });

} catch (error) {
  console.log("Error in Login controller", error.message);
  res.status(500).json({ error: "Internal server error" });
}
};

export const logout =   (req, res) => {
 try {
  res.cookie("jwt","",{maxAge:0})
  res.status(200).json({message:"Logged out Successfully"})

 } catch (error) {
   console.log("Error in Logout controller", error.message);
   res.status(500).json({ error: "Internal server error" });
 }
}