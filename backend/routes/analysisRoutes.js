import express from 'express'
import { getVoteSummary, getVoteTrends } from '../controllers/analysisController.js'

const router = express.Router()

router.get('/summary',getVoteSummary)

router.get('/trends',getVoteTrends)

export default router;