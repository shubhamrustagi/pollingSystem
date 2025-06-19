import prisma from '../db.js'

export const createVoteEntry = async (req,res) => {
    const {name,choice} = req.body
    if (typeof name !== 'string' || typeof choice !== 'boolean') {
        return res.status(400).json({ error: 'Invalid request body' })
    }

    const vote = await prisma.votes.create({ data: { name, choice } });
    res.status(201).json({ data: vote });
}

export const getVoteEntries = async (req,res) =>{
    const voteEntries = await prisma.votes.findMany({
        orderBy: {castedAt: "desc"}
    });

    res.status(200).json({voteEntries})
}