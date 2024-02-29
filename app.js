const express = require('express');
require('./utils/db');
const school = require('./utils/dbSchema')

const app = express();



app.listen(5001); 
app.use(express.json())
app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
  })
app.post('/schools', async(req,res)=>{

  const school = new school(req.body)
  try{
  await school.save()
  res.status(201).send(school)

  }catch(e){
    res.status(400).send(e.message)
  }
})

app.get('/schoolsdata', async(req,res)=>{

  try{
   const schools = await school.find()
   if(!schools)
   return res.status(404).send()
   res.status(200).send(schools)

  }catch(e){
    res.status(500).send()
  }
})


