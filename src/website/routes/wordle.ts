import express from "express";
import { WORDS } from "../utils/words";
const router = express.Router({});

router.get("/", async (_req, res) => {
  const word = WORDS[0];
  res.render("wordle.pug", { word });
});

export default router;
