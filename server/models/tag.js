import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
   title: { type: String, required: true },
   slug: { type: String, required: true, lowercase: true }
});

const Tag = mongoose.model("Tag", tagSchema);
export { Tag };
