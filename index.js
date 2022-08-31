import {MongoClient} from 'mongodb'
import{userroutesignup} from "./Routes/signup.js"
import{userroutesigin} from "./Routes/signin.js"

import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import { tracks } from './Routes/track.js';
import { songImg } from './Routes/song&Img.js';


const uri = "mongodb+srv://narashimman54:lakshmi97@cluster0.n63nudw.mongodb.net/?retryWrites=true&w=majority";
const app = express();
app.use(express.json())
app.use(cors())




async function main(){
    
    const client = new MongoClient(uri);
 
  try 
   {
        await client.connect();  
        console.log("connected...✔✔✔✔")
        return client
   }
 catch(err)
   {
        console.log("error:",err)
   }
    }
    export var clients= await main()
    app.use("/user",userroutesignup,userroutesigin)

    app.use("/track",tracks)
    app.use("/song&img",songImg)
   

    var port=process.env.PORT||3008
    app.listen(port, () => console.log(`server runs in ${port}.......✔✔✔`));
