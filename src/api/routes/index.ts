import { Router } from "express";
import { createApiKeyAuthMiddleware } from "../middleware/api-key-auth-middleware";
import { asyncHandler } from "../middleware/async-handler";
import dummyApi from './dummyApi'
import healthcheckRouter from './healthcheck'

const router = Router();
router.use('/healthcheck', asyncHandler(healthcheckRouter))
const apiKeyMiddleware = createApiKeyAuthMiddleware('CHANGETHIS');
router.use(apiKeyMiddleware);

router.use('/dummy', asyncHandler(dummyApi))
export default router;
