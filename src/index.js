//import express from "express";
//import path from "path";
//import bodyParser from "body-parser";
//import multer from "multer";
//import fs from "fs";
//import router from "./router";

const express = require('express');
const path = require('path');

const bodyParser= require("body-parser");

const router= require('./router');

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/read", router );
app.use("/", router);



///// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));