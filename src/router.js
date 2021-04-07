//import express from "express";
//import { home } from "./controller";

const express = require('express');
const ctl= require('./controller');

const multer = require("multer");
const upload= multer({dest:'read/'});

const router = express.Router();

router.get("/", ctl.home);
router.post("/read", upload.single('getFile') , ctl.read);

function mw(req,res,next){
    //fs.readFile(,'uft8',(err,data)=>{ if (err) throw err; console.log( data); })
    console.log('in mw');
    
    next();
}

//export default router;
module.exports= router;
