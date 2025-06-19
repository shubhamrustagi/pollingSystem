import prisma from '../db.js'
export const checkNameExists = async (req, res) => {
    const { name } = req.query;
    if (!name) return res.status(400).json({ error: 'Missing name' });
  
    const result = await prisma.$queryRaw`
      SELECT COUNT(*) as count FROM Votes WHERE name = ${name}
    `;
    const exists = result[0].count > 0;
  
    res.json({ exists });
}
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