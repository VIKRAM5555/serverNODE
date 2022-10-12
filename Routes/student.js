import express from 'express'
import {clients} from "../index.js"



var apps=express.Router()

apps.post("/",async function(req,res){
    var data=req.body
    
   res.send(await clients.db("student").collection("studentlist").insertOne(data))
   
    
 })

 apps.get("/",async function(req,res){
   
 
  res.send(await clients.db("student").collection("studentlist").find({}).toArray())
 
})



 export var student=apps