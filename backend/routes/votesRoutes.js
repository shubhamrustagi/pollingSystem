import express from 'express'
import {createVoteEntry, getVoteEntries} from '../controllers/voteController.js'
const router = express.Router()

router.post('/',createVoteEntry)
router.get('/',getVoteEntries)

export default router;