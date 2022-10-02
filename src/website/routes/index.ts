import { Router } from "express";
import { asyncHandler } from "../../api/middleware";
import { createCookieAuthMiddleware } from "../../api/middleware";
import homeRouter from "./home";
import authRouter from "./auth";
import wordleRouter from "./wordle";
const router = Router();
const cookieAuth = createCookieAuthMiddleware("admin");
router.use("/", asyncHandler(wordleRouter));
router.use("/auth", asyncHandler(authRouter));
router.use("/wordle", asyncHandler(homeRouter));
router.use(cookieAuth);

export default router;
