import { Router } from "express";
import { galleryData } from "../constants/index.mjs";

const router = Router();

router.get("/gallery", (req, res) => {
  res.send(galleryData);
});

export default router;
