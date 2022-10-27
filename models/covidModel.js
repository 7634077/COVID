const mongoose = require('mongoose');

let covidSchema = new mongoose.Schema({
    exId:String,
    vacc :[{fDate : String,sMaker:String},{fDate : String,sMaker:String},{tDate : String,tMaker:String},{wDate : String,wMaker:String}],
    sickDate : String,
    recovDate : String
    
})

module.exports = mongoose.model('covid', covidSchema);

