import express from 'express'
import {createVoteEntry} from '../controllers/voteController.js'
const router = express.Router();
router.post('/',createVoteEntry)

router.get('/',(req,res)=>{
    res.status(200).send("Everything is working fine for get api votes call")
})

export default router;