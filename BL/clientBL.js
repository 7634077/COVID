
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
                covidModel.findOne({exId:clnt.id}, function(err,cov)
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
                name:{fname:clnt.name.fname, lname:clnt.name.lname},
                addresses : {city : clnt.address.city, street : clnt.address.street,number:clnt.address.number},
                birthday :clnt.birthday,
                tel:clnt.tel,
                pel:clnt.pel,           
                id:clnt.id

        });
    
        p.save(function(err)
        {
            if(err)
            {
                console.log("ggg")
                reject(err)
            }
            else
            {
                console.log("ggg")

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
                name:{fname:clnt.name.fname, lname:clnt.name.lname},
                addresses : {city : clnt.address.city, street : clnt.address.street,number:clnt.address.number},
                birthday :clnt.birthday,
                tel:clnt.tel,
                pel:clnt.pel,           
                id:clnt.id 

            }, function(err) 
            {       
                if(err)
                {
                    reject(err);
                }
                else
                {
                    console.log("aeaeaea")
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

