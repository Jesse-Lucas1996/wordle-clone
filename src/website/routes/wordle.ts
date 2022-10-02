import express from "express";
import { WORDS } from "../utils/words";
const router = express.Router({});

router.get("/", async (_req, res) => {
  res.render("wordle.pug");
});

export default router;
