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
  thumbnail: String,
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
  location: {
    lng: String,
    lat: String
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  images: [{
    type: String,
    required: true
  }],
  like: [{
    count: String
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

module.exports = {
  User: mongoose.model('User', UserSchema),
  Post: mongoose.model('Post', PostSchema),
  Comment: mongoose.model('Comment', CommentSchema)
}