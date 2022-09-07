import { Router } from "express";
import { config } from "../../config";
import { createApiKeyAuthMiddleware } from "../middleware/api-key-auth-middleware";
import { asyncHandler } from "../middleware/async-handler";
import dummyApi from './dummyApi'
import healthcheckRouter from './healthcheck'

const router = Router();
router.use('/healthcheck', asyncHandler(healthcheckRouter))
const apiKeyMiddleware = createApiKeyAuthMiddleware(config.apiKey);
router.use(apiKeyMiddleware);

router.use('/dummy', asyncHandler(dummyApi))
export default router;
