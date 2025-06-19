import express from 'express'

const router = express.Router();

router.get('/summary',(req,res)=>{
    res.status(200).send("Everything is working fine for get api analysis summary call")
})

router.get('/trends',(req,res)=>{
    res.status(200).send("Everything is working fine for get api analysis trends call")
})

export default router;