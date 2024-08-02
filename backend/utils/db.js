import mongoose from "mongoose";

const mongo_db = ()=> mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log("MongoDB connected"))

export default mongo_db
