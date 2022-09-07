import { Router } from "express";
import { asyncHandler, authenticateToken } from "../../api/middleware";
import { createCookieAuthMiddleware } from "../../api/middleware";
import homeRouter from './home'
import createUser from '../../website/routes/createUser'

const router = Router()
const cookieAuth = createCookieAuthMiddleware("CHANGETHIS")
router.use('/', asyncHandler(homeRouter))
router.use('/auth', asyncHandler(createUser))
router.use(cookieAuth)

export default router