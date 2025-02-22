import express from "express";
import {db} from "./db.js";
import { Person } from "./models/person.js"; // isse Person model ke through connectivity perform karenge
import bodyParser from "body-parser";
import { MenuItem } from "./models/menu.js";
import { router } from "./routes/personRoutes.js";
import { routerMenu } from "./routes/menuRoutes.js";
import { configDotenv } from "dotenv";
const app = express()


//! it take the data in the form of object and parse the data and store the data in (req.body)
app.use(bodyParser.json())  // 
//It is a middle ware  

app.get('/' , (req ,res) => {
    res.send(`<h1>Welcome to my hotel </h1>`)
})
//! Post route to add a person
// app.post('/person' , async (req , res) => {
//     try {
//         const data = req.body //Assuming the request body contains the person data jo ki body parser se aa raha hai

//         // create a new person document using the mongoose model
//          const newPerson = new Person(data)
         
//          //Save the new person data to the database

//          const response = await newPerson.save()
//          console.log("data Saved")
//          res.status(200).json(response)
//     } catch (error) {
//               console.log(error)
//               res.status(500).json({error: "Internal Server Error"})
//     }
// })

//! get method to get the person

// app.get('/person' , async (req , res) => {
//     try {
//         const data = await Person.find()
//         console.log("data fetched")
//          res.status(200).json(data)
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({error: "Internal Server Error"})
//     }
// })

//! Post menu data in database

// app.post('/menu' , async (req , res) => {
//     try {
//         const dddd = req.body
//         const MenuData = new MenuItem(dddd) 
//         const response = await MenuData.save() // Save directly on the instance

//         res.status(200).json(response)
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({error: "Internal Server Error"})
//     }
// })

// //! Work Type Routing in Node js
// app.get('/person/:workType' , async(req , res) => {

//     const workType = req.params.workType; // jise parameter change hoga worktype be cahnge hota rahega

//     try {
        
//         if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//               const response = await Person.find({work: workType});
//               console.log("Data Fetched")
//               res.status(200).json(response)
//         }
//         else{
//             res.status(404).json({error:"Invalid work Type" })
//         }
//     } catch (error) {
//         res.status(500).json({error:"Internal Server eRROR" })
        
//     }
// })
 
//! Express Router 

app.use('/person' , router)
app.use('/menu' , routerMenu)
const PORT = process.env.PORT || 3002
app.listen(PORT , () => {
    console.log("Server i running on 3000")
})