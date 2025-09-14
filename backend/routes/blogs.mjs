import { Router } from "express";
import { blogsData, galleryData } from "../constants/index.mjs";

const router = Router();

router.get("/blogs", (req, res) => {
  res.send(blogsData);
});

router.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const story = blogsData.find((blog) => blog._id === id || blog.slug === id);

  if (!story) {
    return res.status(404).json({ error: "Story not found" });
  }

  res.send(story);
});

router.get("/gallery", (req, res) => {
  res.send(galleryData);
});

export default router;
