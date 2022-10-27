const express = require('express');

const router = express.Router();

const clientsBL = require('../BL/clientBL');

router.route('/')
    .get(async function(req,resp)
    {
        console.log("get all");
        let clnts = await clientsBL.getAllclients()
        return resp.json(clnts);
    })

router.route('/:id')
    .get(async function(req,resp)
    {
        console.log("get");

        let clnt = await clientsBL.getclient(req.params.id)
        return resp.json(clnt);
    })

router.route('/')
    .post(async function(req,resp)
    {
        let obj = req.body;
        console.log("obj",obj);

        let status = await clientsBL.addclient(obj)
        return resp.json(status);
    })

router.route('/:id')
    .put(async function(req,resp)
    {
        let obj = req.body;
        let id = req.params.id;
        console.log("update");

        let status = await clientsBL.updateclient(id,obj)
        console.log(status);

        return resp.json(status);
    })

router.route('/:id')
    .delete(async function(req,resp)
    {
        let id = req.params.id;
        console.log("deleet");

        let status = await clientsBL.deleteclient(id)
        return resp.json(status);
    })






    module.exports = router;