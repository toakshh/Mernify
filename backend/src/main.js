import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "../db/index.js"

dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on port ${process.env.PORT || 5000}`)
        })
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err)
    })