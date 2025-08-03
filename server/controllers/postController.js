import fs from "fs";

import { toSlug } from "../utils/textHelper.js";
import { BadRequestError } from "../middleware/errors/errors.js";
import { logError } from "../middleware/errors/errorHandler.js";
import postService from "../services/postService.js";

const create = async (req, res) => {
    try {
        const { title, content, category, tags } = req.body;

        if (!title || !content) {
            throw new BadRequestError(
                "Missing title or content, title and content are required"
            );
        }
        const post = await postService.createPost(
            title,
            content,
            category,
            tags
        );
        res.status(200).json({ message: "post created", post });
    } catch (error) {
        logError(error);
    }
};

export { create };
