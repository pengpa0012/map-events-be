const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log("listening on port ", port)
})