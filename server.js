import express from "express";
import multer from "multer";
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client-build")));
