var slugify = require("slugify");

import { Post } from "../models/post.js";
import { FindCategoryByName } from "./categoryService.js";
import { FindOrCreateTags } from "./tagService.js";

async function CreatePost(title, content, category, tags) {
    const categoryId = FindCategoryByName(category);
    const tagIds = FindOrCreateTags(tags);

    let post = new Post();
    post.title = title;
    post.slug = slugify(title);
    post.content = content;
    post.category = categoryId;
    post.tags = tagIds;

    Post.create(post);
}

export { CreatePost };
