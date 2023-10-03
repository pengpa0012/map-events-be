const express = require("express")
const router = express.Router()
const { verifyJWT } = require("../utils")


router.get("/likePost", verifyJWT, async (req, res) => {})

module.exports = router