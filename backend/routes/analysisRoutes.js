import express from 'express'
import { getVoteSummary } from '../controllers/analysisController.js';

const router = express.Router();

router.get('/summary',getVoteSummary)

router.get('/trends',(req,res)=>{
    res.status(200).send("Everything is working fine for get api analysis trends call")
})

export default router;