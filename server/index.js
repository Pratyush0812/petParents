import express from "express";
const app = express()
import {config} from 'dotenv'
import cors from 'cors'
import { connectDB } from "./data/database.js";
import { Listing } from "./models/listing.js";
config({
    path : "./data/config.env"
})

connectDB()

app.use(express.json())
app.use(cors())



const PORT = process.env.PORT

app.post('/addlisting',async (req,res)=>{
    console.log(req.body)
    const listing = await Listing.create(req.body)
    res.send({
        status : 'ok',
    })
})

app.listen(PORT,()=>{
    console.log("server is working")
})