import express from "express";
const app = express()
import {config} from 'dotenv'
import cors from 'cors'
import { connectDB } from "./data/database.js";
import { Listing } from "./models/listing.js";
import { Users } from "./models/user.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import multer from 'multer'
config({
    path : "./data/config.env"
})

connectDB()

app.use('/uploads',express.static('uploads'))
app.use(express.json())
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit:50000
}));


const PORT = process.env.PORT
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'_' + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })


app.post('/api/register', async(req,res)=>{
    try{
        const newPassword = await bcrypt.hash(req.body.password,10)
        const user = await Users.create({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            contact : req.body.email,
            password : newPassword
        })
        res.json({
            status : 'ok',
        })
    }catch(err){
        res.json({ status : 'error', error: 'Duplicate email'})
    }
})
app.post('/api/login', async(req,res)=>{
    const user = await Users.findOne({email : req.body.email})
    
    if(!user){
        return res.json({staus : 'usererror' , user : false})
    }else{
        const isPasswordValid = await bcrypt.compare(req.body.password,user.password);
        if(!isPasswordValid){
            return res.json({status : 'passerror',user : false})
        } 
        else{
            const token = jwt.sign({
                firstname : user.firstname,
                lastname : user.lastname,
                email : user.email,
                contact : user.contact
            },'secret123')
            return res.json({status : 'ok',user : token})
        }
}})


app.post('/addlisting',upload.array('images',3),async (req,res)=>{
    
    const {name,cat,breed,date,age,vac,history} = req.body;
    const images = req.files.map(a => a.filename);
    console.log(images)
    const listing = await Listing.create({name,cat,breed,date,age,vac,history,images})
    res.json({
        status : 'ok',
    })
})


app.get('/listings',async(req,res)=>{
    const allListings = await Listing.find({})
    res.json(allListings)
})

app.listen(PORT,()=>{
    console.log("server is working")
})