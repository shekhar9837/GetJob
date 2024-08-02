import {User} from "../models/user.model.js"
import bcrypt  from "bcryptjs";

export const register = async (req, res)=>{
    try {
        const {fullName, email,phoneNumber, password, role} = req.body;
    if(!fullName|| !email || !phoneNumber || !password|| !role){
        return res.status(400).json({message: 'All fields are required'});
    }

    const userExist = await User.findOne({email});
    if(userExist){
        return res.status(400).json({message: 'Email already exists'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        fullName,
        email,
        phoneNumber,
        password: hashedPassword,
        role
    })
    res.status(200).json({message: 'User registered successfully'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"User registration failed"})
    }
}

export const login = async (req, res)=>{

 try {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({message: 'Email and password are required'});
    }
    let user = await User.findOne({email});
    if(!user){
        return res.status(401).json({message: 'Invalid credentials'});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid password'});
    }

    const tokenData = {
        userId: user._id
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: '1h'});

    user = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile
    }

    return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpsOnly:true, sameSite:"strict"}).json({
        message: "User logged in successfully",
        user
    })
 } catch (error) {
    console.log(error)
 }  
}

export const logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message: "User logged out successfully"
        })
    } catch (error) {
        console.log(error)
    }
}