var slugify = require("slugify");

import { Post } from "../models/post.js";

async function CreatePost(title, content, category, tags) {
    let post = new Post();
    post.title = title;
    post.slug = slugify(title);
    post.content = content;
}

export { CreatePost };
