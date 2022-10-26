const mongoose = require('mongoose');

let clientSchema = new mongoose.Schema({
    name:{fname:String,lname:String},
    addresses:{city : String, street : String, namber: Number},
    birthday :String,
    tel:String,
    pel:String,
    exId:String 
})

module.exports = mongoose.model('client', clientSchema);

