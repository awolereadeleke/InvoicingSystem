
import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"


const app=express();
const PORT =5000;

app.use(bodyParser.json());
