import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';
import fileUpload from 'express-fileupload' ;
// const formidable = require('express-formidable');
dotenv.config();

const app = express();


app.use(cors({
    origin: 'https://bloghubb.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }));
  // app.use(formidable()); 
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);
// app.use(
//   fileUpload(
//     {
//       useTempFiles:true
//     }
//   )
// );


const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));