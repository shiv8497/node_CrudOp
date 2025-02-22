//! This file is responsible for Connect nodejs to MongoDb

 //* step 1 - Install npm i mongoose 
 //  configDotenv.config();
 //1
 import mongoose from 'mongoose';
//! this import when i use .env file
import dotenv from 'dotenv'
dotenv.config();

 //Define the mongoDB Connection URl
//  const mongoURL = 'mongodb://localhost:27017/hotels' // Replace database with your database  name
//  const mongoURL = "mongodb+srv://shivamoffical7722:shivam7722@cluster0.3c4ks.mongodb.net/"  // this url connect to online database

//! .env files
// const mongoURL = process.env.MONGODB_URL_Local
 const mongoURL = process.env.MONGODB_URL

 //2 Set up MongoDB Connection
  mongoose.connect( mongoURL, {
    useNewUrlParser: true,  // Both are required parameter
    useUnifiedTopology: true
 })

 //*3 Get the default Connection
 //* Mongoose maintain a default connection object the mongoDB connection
 export const db = mongoose.connection; // this line help to establish a bridge between node js and mongodb

 //4 Define event  listners for database connection
 db.on('connected' , () => {
    console.log("Connected to MongoDB server")
 });
 db.on('error' , (err) => {
    console.log("Something i swrong" , err)
 });
 db.on('disconnected' , () => {
    console.log("MongoDB disconnected")
 })

// 5 export the db //! this method used when use  ES modules const mongoose = require('mongoose')
//  module.exports = db;



// import mongoose from 'mongoose';

// const mongoURl = 'mongodb://localhost:27017/hotels';

// mongoose.connect(mongoURl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// export const db = mongoose.connection;

// db.on('connected', () => {
//   console.log('Connected to MongoDB server');
// });
// db.on('error', (err) => {
//   console.log('Something is wrong', err);
// });
// db.on('disconnected', () => {
//   console.log('MongoDB disconnected');
// });
