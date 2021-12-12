const express = require('express')
const app = express()
app.use(express.json())
app.listen(5000,()=>console.log('rodando na 5000'))
app.get('/',(req,res)=>{
    res.status(200).json({message:"Rodando no heroku"})
})