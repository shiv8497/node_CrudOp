import { Router } from "express";
import express from "express";
import { Person } from "../models/person.js";
import { error } from "console";

export const router = express.Router();

//! Post Method
router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data jo ki body parser se aa raha hai

    // create a new person document using the mongoose model
     const newPerson = new Person(data);

    //Save the new person data to the database

    const response = await newPerson.save();
    console.log("data Saved of Person Routes");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//! Get Method
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data Saved of Person Routes");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! Work Type Routing in Node js
router.get("/:workType", async (req, res) => {
  const workType = req.params.workType; // jise parameter change hoga worktype be cahnge hota rahega

  try {
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("Data Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work Type" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server eRROR" });
  }
});

//! Update Operation
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // get person id  // id ko send karte hai parameter ke through
    const updatedPersonData = req.body; // or jo body ke mein data update karna rahetha hai use ha send ghkarte hai body ke throu
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Person Not Found " });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server Error" });
  }
});

//! delete Operation

router.delete('/:id' , async(req , res) => {
         try {
            const personId = req.params.id;
            const response = await Person.findByIdAndDelete(personId)
            if (!response) {
                return res.status(404).json({ error: "Person Not Found " });
              }
            console.log("Data deleted")

            res.status(200).json({message: "Person Deleted Successfully"})
         } catch (error) {
            res.status(500).json({ error: "Internal server Error" });
         }
})