// ===============================================================================
// API ROUTING
// ===============================================================================


const express = require('express');
const db = require('../models');
const path = require('path');

const router = express.Router();

router.post("/api/kudos", function(req, res){
 db.Kudos.create(req.body).then(function(data){
    res.json(data);
 }).catch(function(err){
     res.json(err);
 })
});

router.get("/api/user", function(req, res){
    db.Users.find({}).then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json(err)
    })
})

router.get("/api/kudos", function(req, res){
db.Kudos.find({}).then(function(data){
    res.json(data);
})

})
module.exports = router; 