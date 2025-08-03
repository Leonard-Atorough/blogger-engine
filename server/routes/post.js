import express from "express";
import { create } from "../controllers/postController.js";

const router = express.Router();

router.post("/post", create);

export { router as postRoutes };
