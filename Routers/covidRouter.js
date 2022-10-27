const express = require('express');

const router = express.Router();

const covidBL = require('../BL/covidBL');

router.route('/')
    .get(async function(req,resp)
    {
        let covs = await covidBL.getAllcovids()
        console.log(covs)
        return resp.json(covs);
    })

router.route('/:id')
    .get(async function(req,resp)
    {
        let cov = await covidsBL.getcovid(req.params.id)
        return resp.json(cov);
    })

router.route('')
    .post(async function(req,resp)
    {
        let obj = req.body;

        let status = await covidsBL.addcovid(obj)
        return resp.json(status);
    })

router.route('/:id')
    .put(async function(req,resp)
    {
        let obj = req.body;
        let id = req.params.id;
        
        let status = await covidsBL.updatecovid(id,obj)
        return resp.json(status);
    })

router.route('/:id')
    .delete(async function(req,resp)
    {
        let id = req.params.id;

        let status = await covidsBL.deletecovid(id)
        return resp.json(status);
    })






    module.exports = router;