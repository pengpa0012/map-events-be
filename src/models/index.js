const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  following: Number,
  followers: Number,
  total_post: Number
})

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date_created: {
    type: Date,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  like: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  }],
})

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  text: {
    type: String,
    required: true
  },
  date_created: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

module.exports = mongoose.model("user", UserSchema)
module.exports = mongoose.model("post", PostSchema)
module.exports = mongoose.model("comment", CommentSchema)