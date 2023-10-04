const express = require("express")
const router = express.Router()
const { verifyJWT } = require("../utils")
const { Post } = require("../models")


router.get("/getAllPost", verifyJWT, async (req, res) => {
  const result = await Post.find()

  if(result) {
    res.status(200).send({result})
  } else {
    res.status(500).send({message: "Error getting all posts"})
  }
})

router.get("/getPost", verifyJWT, async (req, res) => {
  const postId = req.query.id
  const result = await Post.find({ _id: postId })

  if(result) {
    res.status(200).send({result})
  } else {
    res.status(500).send({message: "Error getting post"})
  }
})

router.post("/createPost", verifyJWT, async (req, res) => {
  const { username, title, description, location, date_created, images } = req.body
  const result = await Post.insertMany({username, title, description, location, date_created, images})

  if(result) {
    res.status(200).send({result})
  } else {
    res.status(500).send({message: "Error create post"})
  }
})

router.post("/deletePost", verifyJWT, async (req, res) => {
  // TODO
  // Delete all its comments on post

  const postId = req.query.id
  const result = await Post.deleteOne({ _id: postId })

  if(result) {
    res.status(200).send({result})
  } else {
    res.status(500).send({message: "Error delete post"})
  }
})



module.exports = router