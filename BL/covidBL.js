
const { colorChannel } = require('@mui/system');
const covidModel = require('../models/covidModel');


const getAllcovids = function()
{
    return new Promise((resolve,reject) =>
    {
        covid.find({}, function(err,cov)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(cov);
            }
        })
    })
}

const getcovid = function(id)
{    console.log(id)

    return new Promise((resolve,reject) =>
    {
        covid.findById(id, function(err,cov)
        {
            if(err)
            {
                reject(err);
            }
            else
            {    console.log(cov)

                resolve(cov);
            }
        })
    })
}

const addcovid = function(cov)
{
    return new Promise((resolve, reject) =>
        {
            const p = new covidModel({
                vacc : [{fDate : cov.vacc.fDate,fMaker:cov.vacc.fMaker},{sDate : cov.vacc.sDate,sMaker:cov.vacc.sMaker},{tDate : cov.vacc.tDate,tMaker:cov.vacc.tMaker},{wDate : cov.vacc.wDate,wMaker:cov.vacc.wMaker}],
                sickDate : cov.sickDate,
                recovDate : cov.recovDate


        });
    
        newcov.save(function(err)
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

const updatecovid = function(id,cov)
{
    return new Promise((resolve, reject) =>
    {
        covidModel.findByIdAndUpdate(id,
            {
                vacc : [{fDate : cov.vacc.fDate,fMaker:cov.vacc.fMaker},{sDate : cov.vacc.sDate,sMaker:cov.vacc.sMaker},{tDate : cov.vacc.tDate,tMaker:cov.vacc.tMaker},{wDate : cov.vacc.wDate,wMaker:cov.vacc.wMaker}],
                sickDate : cov.sickDate,
                recovDate : cov.recovDate

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

const deletecovid = function(id)
{
    return new Promise((resolve, reject) =>
    {
        covidModel.findByIdAndDelete(id, function(err) 
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

module.exports = {getAllcovids,getcovid,addcovid,updatecovid,deletecovid}

