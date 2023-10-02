const express = require("express")
const router = express.Router()


router.get("/getAllPost", verifyJWT, async (req, res) => {})

router.get("/getPost", verifyJWT, async (req, res) => {})

router.get("/createPost", verifyJWT, async (req, res) => {})

router.get("/deletePost", verifyJWT, async (req, res) => {})



module.exports = router