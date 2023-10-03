const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const userRoutes = require("./routes/user")
const postRoutes = require("./routes/post")
const likeRoutes = require("./routes/like")

connectDB()
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use("/user", userRoutes)
app.use("/post", postRoutes)
app.use("/like", likeRoutes)

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log("listening on port ", port)
})