var slugify = require("slugify");

import { Post } from "../models/post.js";

async function CreatePost(title, content, category, tags) {
    const categoryId = "";
    const tagIds = [];

    let post = new Post();
    post.title = title;
    post.slug = slugify(title);
    post.content = content;
    post.category = categoryId;
    post.tags = tagIds;

    Post.create(post);
}

export { CreatePost };
