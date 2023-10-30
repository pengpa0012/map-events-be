const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../utils");
const { Post } = require("../models");

router.get("/getAllPost", verifyJWT, async (req, res) => {
	const result = await Post.find();

	if (result) {
		res.status(200).send({ result });
	} else {
		res.status(500).send({ message: "Error getting all posts" });
	}
});

router.get("/getPost", verifyJWT, async (req, res) => {
	const postId = req.query.id;
	const result = await Post.find({ _id: postId });

	if (result) {
		res.status(200).send({ result });
	} else {
		res.status(500).send({ message: "Error getting post" });
	}
});

router.get("/getUserPosts", verifyJWT, async (req, res) => {
	const userId = req.query.id;
	const result = await Post.find({ user: userId });

	if (result) {
		res.status(200).send({ result });
	} else {
		res.status(500).send({ message: "Error getting posts" });
	}
});

router.post("/createPost", verifyJWT, async (req, res) => {
	const { user, title, description, location, date_created, images } = req.body;
	console.log(req.body);
	const result = await Post.insertMany({
		user,
		title,
		description,
		location,
		date_created,
		images,
	});

	if (result) {
		res.status(200).send({ result });
	} else {
		res.status(500).send({ message: "Error create post" });
	}
});

router.post("/deletePost", verifyJWT, async (req, res) => {
	const postId = req.query.id;
	const result = await Post.deleteOne({ _id: postId });

	if (result) {
		res.status(200).send({ result });
	} else {
		res.status(500).send({ message: "Error delete post" });
	}
});

module.exports = router;
