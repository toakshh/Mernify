
import { User } from "../Models/user.models.js";

const registerUser = async (req, res) => {

    /**
     * TODO: 

     * get user details
     * validate data
     * check if user pre-exist
     * create user object - create entry in db
     * check if user created 
     * remove password and refresh token data from response
     * return response to frontend
     * 
     *
     */

    try {
        const { username, email, password, confirmPassword } = req.body

        // Check if user already exists in the database
        let user = await User.findOne({ email });
        if (user) {
            res.status(409)
            throw new Error("User already exists");
        }

        // Password and Confirm Password do not match
        if (password !== confirmPassword) {
            res.status(400);
            throw new Error("Passwords do not match");
        }

        // Create new user
        let createdUser = await User.create({
            username,
            email,
            password
        })

        res.status(201).json({ message: "User registered successfully", createdUser })
    }
    catch (e) {
        res.status(500).json({
            message: "Error in registering user",
            reason: e.message,
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists in the database
        let user = await User.findOne({ email });
        if (!user) {
            res.status(400);
            throw new Error("User not found");
        }

        // Check if password is correct
        const isMatch = await user.isCorrectPassword(password);
        if (!isMatch) {
            res.status(400);
            throw new Error("Incorrect password");
        }

        // Send response
        res.status(200).json({
            _id: user.id,
            name: user.username,
            email: user.email
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while loggin in",
            reason: e.message,
        })
    }

}



export { loginUser, registerUser }
