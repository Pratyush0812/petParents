import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name : 'String',
    cat : 'String',
    breed : 'String',
    date : 'String',
    age : 'Number',
    vac : 'Boolean',
    history : 'String'
})

export const Listing = mongoose.model('Listing',schema)