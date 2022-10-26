
const { colorChannel } = require('@mui/system');
const clientModel = require('../models/clientModel');
const covidModel = require('../models/covidModel');


const getAllclients = function()
{
    return new Promise((resolve,reject) =>
    {
        clientModel.find({}, function(err,clnt)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(clnt);
            }
        })
    })
}

const getclient = function(id)
{    

    return new Promise((resolve,reject) =>
    {
        clientModel.findById(id, function(err,clnt)
        {
            if(err)
            {
                reject(err);
            }
            else
            {    
                covidModel.findOne({exId:clnt.exId}, function(err,cov)
                {
                    if(err)
                    {
                        reject(err);
                    }
                    else
                    { 
                        person = [clnt,cov] ;
                        resolve(person);

                    }
                })
            }
        })
    })
}

const addclient = function(clnt)
{
    return new Promise((resolve, reject) =>
        {
            const p = new clientModel({
                name:[{fname:per.name.fname, lname:per.name.lname}],
                addresses : [{city : per.address.city, street : per.address.street}],
                birthday :per.birthday,
                tel:per.tel,
                pel:per.pel,           
                exId:per.exId

        });
    
        newclnt.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('OK');
            }
        })
    })
}

const updateclient = function(id,clnt)
{
    return new Promise((resolve, reject) =>
    {
        clientModel.findByIdAndUpdate(id,
            {
                name:[{fname:per.name.fname, lname:per.name.lname}],
                addresses : [{city : per.address.city, street : per.address.street}],
                birthday :per.birthday,
                tel:per.tel,
                pel:per.pel,           
                exId:per.exId 

            }, function(err) 
            {       
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve('Updated');
                }
            })
    })
}

const deleteclient = function(id)
{
    return new Promise((resolve, reject) =>
    {
        clientModel.findByIdAndDelete(id, function(err) 
             {       
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Deleted');
            }
        })
    })
}

module.exports = {getAllclients,getclient,addclient,updateclient,deleteclient}

