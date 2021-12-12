const express = require('express')
const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;
const app = express()
const port = process.env.PORT || 3333
app.use(express.json())
app.listen(port,()=>console.log('rodando na 5000'))
app.get('/',(req,res)=>{
    res.json({message:"Rodando no heroku"})
})