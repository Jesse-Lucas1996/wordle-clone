import { Router } from "express";
import { asyncHandler } from "../../api/middleware";
import { createCookieAuthMiddleware } from "../../api/middleware";
import homeRouter from "./home";
import createUser from "../../website/routes/createUser";
import wordleRouter from "./wordle";
const router = Router();
const cookieAuth = createCookieAuthMiddleware("admin");
router.use("/", asyncHandler(homeRouter));
router.use("/auth", asyncHandler(createUser));
router.use("/wordle", asyncHandler(wordleRouter));
router.use(cookieAuth);

export default router;
