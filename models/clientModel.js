const mongoose = require('mongoose');

let clientSchema = new mongoose.Schema({
    name:{fname:String,lname:String},
    addresses:{city : String, street : String, number: Number},
    birthday :String,
    tel:String,
    pel:String,
    id:String 
})

module.exports = mongoose.model('client', clientSchema);

