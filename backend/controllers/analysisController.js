import prisma from "../db.js";

export const getVoteSummary = async (req, res) => {
    const yes = await prisma.votes.count({ where: { choice: true } });
    const no = await prisma.votes.count({ where: { choice: false } });
  
    res.json({ data: { yes, no } });
  };