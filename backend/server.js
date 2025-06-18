import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT||6800

app.get('/api/votes',(req,res)=>{
    res.status(200).send("Everything is working fine for get api votes call")
})
app.post('/api/votes',(req,res)=>{
    res.status(200).send("Everything is working fine for post api votes call")
})
app.get('/api/analysis/trends',(req,res)=>{
    res.status(200).send("Everything is working fine for get api analysis trends call")
})
app.get('/api/analysis/summary',(req,res)=>{
    res.status(200).send("Everything is working fine for get api analysis summary call")
})




app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})