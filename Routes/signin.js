import {clients} from "../index.js"
import express from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
var apps=express.Router()

apps.get("/signin",async function(req,res){
    var data=req.body
    var userexist=await clients.db("spotify").collection("user").findOne({name:data.name})
    
    if(!userexist){res.status(404).send({msg:"Invalid Credential"})}
    else{
        var camparePwd=await bcrypt.compare(data.password,userexist.password)
        if(camparePwd){

            var token=  jwt.sign({id:userexist._id}, process.env.PrivateKey)
            res.send({msg:"sucess",token:token})
           

        }
        else{res.status(404).send({msg:"Invalid Credential"})}
    }
 })


 export var userroutesigin=apps