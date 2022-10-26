const express = require('express');

const router = express.Router();

const clientsBL = require('../BL/clientBL');

router.route('/')
    .get(async function(req,resp)
    {
        let clnts = await clientsBL.getAllclients()
        return resp.json(clnts);
    })

router.route('/:id')
    .get(async function(req,resp)
    {
        let clnt = await clientsBL.getclient(req.params.id)
        return resp.json(clnt);
    })

router.route('')
    .post(async function(req,resp)
    {
        let obj = req.body;

        let status = await clientsBL.addclient(obj)
        return resp.json(status);
    })

router.route('/:id')
    .put(async function(req,resp)
    {
        let obj = req.body;
        let id = req.params.id;
        
        let status = await clientsBL.updateclient(id,obj)
        return resp.json(status);
    })

router.route('/:id')
    .delete(async function(req,resp)
    {
        let id = req.params.id;

        let status = await clientsBL.deleteclient(id)
        return resp.json(status);
    })






    module.exports = router;