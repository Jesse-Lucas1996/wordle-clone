import { Router } from 'express';
import { authenticateToken } from '../middleware';
const router = Router();

router.get('/', authenticateToken, (_req,res)=>{
    return res.send('dummy')
})

export default router