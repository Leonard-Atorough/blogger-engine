import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
   title: { type: String, required: true },
   slug: { type: String, required: true, lowercase: true }
});

const Category = mongoose.model("Category", categorySchema);
export { Category };
