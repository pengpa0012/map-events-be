const express = require("express")
const router = express.Router()


router.get("/likePost", verifyJWT, async (req, res) => {})

module.exports = router