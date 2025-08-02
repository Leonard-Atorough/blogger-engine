import fs from "fs";

import Post from "../controllers/post.js";
import Category from "../controllers/category.js";
import Tag from "../controllers/tag.js";

import { toSlug } from "../utils/textHelper.js";

const create = (req, res) => {
   const { title, content, category, tags } = req.body;

   if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required." });
   }
   let post = new Post();
   post.title = title;
   post.slug = toSlug(title);
   post.content = content;
   post.category = category;
   post.tags = tags || [];
};
