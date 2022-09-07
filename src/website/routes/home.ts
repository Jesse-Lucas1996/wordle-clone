import express from 'express'

const router = express.Router({})

router.get('/', async(_req, res)=>{
    res.render('index.pug')
})

export default router