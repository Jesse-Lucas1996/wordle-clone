import { Router } from 'express';
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import { config } from '../../config';

const router = Router();
router.use(cookieParser('token'))

function generateAccessToken(username: any) {
    return jwt.sign(username, config.tokenSecret, { expiresIn: '1800s' });
  }

router.post('/', (req, res) => {
const token = generateAccessToken({username: req.body});
if (typeof window !== 'undefined') {
  window.sessionStorage.setItem('token', token)
}
res.cookie('token', token, {
  signed: true,
  httpOnly: true,
  expires: new Date(new Date().setHours(new Date().getHours() + 1))
})
return res.redirect('/');
});

router.get('/', async (_req, res) => {
  res.render('auth.pug')
})


export default router