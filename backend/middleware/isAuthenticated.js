import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) =>{
    try {
        const token = req.cookies.token
        if(!token) return res.status(401).json({ message: "You are not authenticated" })
    
        const decode = await jwt.verify(token, process.env.JWT_SECRET)
        if(!decode) return res.status(403).json({ message: "Invalid token" })
        req.id = decode.userId
        next()
    } catch (error) {
        console.error(error)
    }
}

export default isAuthenticated;