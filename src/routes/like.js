const express = require("express")
const router = express.Router()
const { verifyJWT } = require("../utils")


router.post("/likePost", verifyJWT, async (req, res) => {
  const { id } = req.query.id
})

module.exports = router