import express = require("express")
import cookieParser = require("cookie-parser");
import dotenv = require("dotenv")
dotenv.config()


const app = express()

app.use(express.json())
app.use(cookieParser())


export default app

