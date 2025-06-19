import express from 'express'

const router = express.Router();
router.post('/',(req,res)=>{
    res.status(200).send("Everything is working fine for post api votes call")
})

router.get('/',(req,res)=>{
    res.status(200).send("Everything is working fine for get api votes call")
})

export default router;