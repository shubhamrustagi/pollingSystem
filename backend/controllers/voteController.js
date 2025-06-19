import prisma from '../db.js'

export const createVoteEntry = async (req,res) => {
    const {name,choice} = req.body
    if (typeof name !== 'string' || typeof choice !== 'boolean') {
        return res.status(400).json({ error: 'Invalid request body' })
    }

    const vote = await prisma.votes.create({ data: { name, choice } });
    res.status(201).json({ data: vote });
}