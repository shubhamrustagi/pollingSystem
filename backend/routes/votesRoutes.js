import express from 'express'
import {checkNameExists, createVoteEntry, getVoteEntries} from '../controllers/voteController.js'
const router = express.Router()

router.post('/',createVoteEntry)
router.get('/',getVoteEntries)
router.get('/check', checkNameExists);

export default router;