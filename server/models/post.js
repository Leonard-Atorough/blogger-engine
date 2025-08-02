import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
   title: { type: String, required: true },
   slug: { type: String, required: true, lowercase: true },
   published: { type: Boolean, default: false },
   author: { type: String, required: true },
   content: String,
   tags: [String],
   dateCreated: {
      type: Date,
      default: () => date.now(),
      immutable: true
   },
   dateUpdated: Date,
   comments: [
      {
         user: String,
         content: String,
         votes: Number
      }
   ]
});

const Post = mongoose.model("Post", postSchema);
export { Post };