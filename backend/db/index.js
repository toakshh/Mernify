import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`)
        console.log(`MongoDB Connected Successfully at : ${conn.connection.host}`)

    } catch (e) {
        console.log("Error in connecting to mongoDB. ", e)
        process.exit(1)
    }
}

export default connectDB