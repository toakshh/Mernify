import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "../db/index.js"

dotenv.config({
    path: "./.env"
})
const PORT = process.env.PORT || 5000;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
    }
    )
    .catch((err) => {
        console.log("Error connecting to MongoDB", err)
    })