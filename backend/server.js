import express from 'express'
import dotenv from 'dotenv'
import voteRoutes from './routes/votesRoutes.js'
import analysisRoutes from './routes/analysisRoutes.js'
import cors from 'cors'
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT||6800

app.use('/api/votes',voteRoutes)
app.use('/api/analysis',analysisRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})

export default app;