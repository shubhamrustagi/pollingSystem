import prisma from "../db.js"

export const getVoteSummary = async (req, res) => {
    const yes = await prisma.votes.count({ where: { choice: true } })
    const no = await prisma.votes.count({ where: { choice: false } })
  
    res.json({ data: { yes, no } })
}

export const getVoteTrends = async (req, res) => {
    const yesVotesRaw = await prisma.votes.findMany({
      where: { choice: true },
      select: { castedAt: true }
    });
  
    const noVotesRaw = await prisma.votes.findMany({
      where: { choice: false },
      select: { castedAt: true }
    });
  
    const format = (arr) => {
      const grouped = {};
      for (const { castedAt } of arr) {
        const date = castedAt.toISOString().slice(0, 10);
        grouped[date] = (grouped[date] || 0) + 1;
      }
      return Object.entries(grouped).map(([date, count]) => ({ date, count }));
    };
  
    res.json({
      yes_votes: format(yesVotesRaw),
      no_votes: format(noVotesRaw)
    });
  };