import prisma from "../db.js"

export const getVoteSummary = async (req, res) => {
    const yes = await prisma.votes.count({ where: { choice: true } })
    const no = await prisma.votes.count({ where: { choice: false } })
  
    res.json({ data: { yes, no } })
}

export const getVoteTrends = async (req, res) => {
  
    const yes = await prisma.$queryRaw `SELECT DATE(castedAt) as "date",count(*) as "count" FROM votes WHERE choice = true GROUP BY DATE(castedAt); `
    const no = await prisma.$queryRaw `SELECT DATE(castedAt) as "date",count(*) as "count" FROM votes WHERE choice = false GROUP BY DATE(castedAt); `

    const yes_votes = yes.map(y => ({
      date:y.date,
      count: Number(y.count)
    }))

    const no_votes = no.map(n => ({
      date:n.date,
      count:Number(n.count),
    }))
    
    
    
    res.json({
      yes_votes,no_votes
    });
  };