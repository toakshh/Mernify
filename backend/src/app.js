import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//# CORS_METHODS is a list of methods the client is allowed to use
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

//# BODY_PARSER - lets you limit the size of the request
app.use(express.json({ limit: "16kb" }))


//# BODY_PARSER - lets you parse data via url and 
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
/**
    NOTE:extended = "true" supports nested objects because it uses "qs" library while receiving data whereas when set to "false", it will use "querystring" library thus, will treat it as flat object and nested objects or arrays will not be parsed properly 
*/

// Setting up assets for basic access level like favicon,images
app.use(express.static("public"))

// server secured cookies- data sent by server to client for maintaining sessions,storing user prefrences and other data.
app.use(cookieParser())

// ROUTES
import router from "../Routes/auth.routes.js"
/**
 * TODO: import routes and add them here
 */
app.use("/auth", router)



export default app