const express = require('express');
const router = express.Router();
const Link =require('../models/link')

router.get('/', async(req,res)=>{
    const lastAddLinks=  await Link.find().sort({date:-1}).limit(5);


    return res.render('index', {links:lastAddLinks || []})
})


module.exports = router;