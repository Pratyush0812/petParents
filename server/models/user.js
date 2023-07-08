import mongoose from "mongoose"

const User = new mongoose.Schema({
    firstname : {type : String, required:true},
    lastname : {type :String},
    email : {type : String, required:true, unique:true},
    contact : {type : String, required:true},
    password : {type : String, required:true},  
})
export const Users = mongoose.model('Users',User) 