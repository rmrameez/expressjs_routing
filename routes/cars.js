const express = require('express');
const router = express.Router();

router
.route("/")
.get((req,res)=>{
    res.status(200).send("cars");
})
.post((req,res)=>{
    res.status(200).send("cars");
})

router
.route("/:id")
.get((req,res)=>{
    res.status(200).send("car id is " +  req.params.id);
})
.post((req,res)=>{
    res.status(200).send("car id is " +  req.params.id);
})
.delete((req,res)=>{
    res.status(200).send("car id is " +  req.params.id);
})

module.exports = router;