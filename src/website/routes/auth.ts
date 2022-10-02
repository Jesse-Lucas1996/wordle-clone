import { Router } from "express";
import cookieParser from "cookie-parser";

const router = Router();

router.use(cookieParser("user"));

router.get("/", async (_req, res) => {
  res.render("auth.pug");
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  res.cookie("user", username as string, {
    signed: true,
    httpOnly: true,
    domain: "localhost",
    expires: new Date(new Date().setHours(new Date().getHours() + 1)),
  });
  return res.status(200).redirect("/wordle");
});

export default router;
