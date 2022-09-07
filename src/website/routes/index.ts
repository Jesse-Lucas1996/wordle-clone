import { Router } from "express";
import { asyncHandler, authenticateToken } from "../../api/middleware";
import { createCookieAuthMiddleware } from "../../api/middleware";
import homeRouter from './home'
import createUser from '../../website/routes/createUser'
import { config } from "../../config";

const router = Router()
const cookieAuth = createCookieAuthMiddleware(config.cookieSecret)
router.use('/', asyncHandler(homeRouter))
router.use('/auth', asyncHandler(createUser))
router.use(cookieAuth)

export default router