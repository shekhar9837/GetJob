import express, { Router } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import mongo_db from "./utils/db.js"
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"


dotenv.config({})

const app= express()
app.use(express.json())
app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, 
  };
  
  app.use(cors(corsOptions));
 

app.use("/api/v1/user", userRoute)//user route
app.use("/api/v1/company", companyRoute)//user route
app.use("/api/v1/job", jobRoute)//user route
app.use("/api/v1/application", applicationRoute)//user route


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
 mongo_db()
    console.log(`Server running on port ${PORT}`)
})