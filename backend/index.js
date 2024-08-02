import express, { Router } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import mongo_db from "./utils/db.js"
import userRoute from "./routes/user.route.js"

dotenv.config({})

const app= express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/v1/users", userRoute)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
 mongo_db()
    console.log(`Server running on port ${PORT}`)
})