import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(express.json())

const PORT = process.env.PORT||6800

app.use('/api/votes',voteRoutes)
app.use('/api/analysis',analysisRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})

export default app;