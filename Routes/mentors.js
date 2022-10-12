import express from 'express'
import {clients} from "../index.js"




var apps=express.Router()

apps.post("/",async function(req,res){
    var data=req.body
    
   res.send(await clients.db("mentors").collection("mentorlist").insertOne(data))
   
    
 })

 apps.get("/",async function(req,res){
   
 
  res.send(await clients.db("mentors").collection("mentorlist").find({}).toArray())
 
})



 export var mentors=apps