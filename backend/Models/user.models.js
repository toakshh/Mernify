import mongoose from "mongoose"
import bcrypt from "bcrypt"


const userSchema = mongoose.Schema({
    username: {
        type: String,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    confirmPassword: {
        type: String,
        trim: true,
        minlength: 8
    }
})

// it will salt the password before updating/saving any data
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    const salt = await bcrypt.genSalt(10)
    this.password = bcrypt.hash(this.password, salt)
    next()
})

// additional function to check password
userSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)