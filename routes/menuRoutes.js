import { Router } from "express";
import express from "express";
import { MenuItem } from "../models/menu.js";

export const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const dddd = req.body;
    const MenuData = new MenuItem(dddd);
    const response = await MenuData.save(); // Save directly on the instance

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const responses = await MenuItem.find();

    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ error: "Invalid data" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const dishTaste = req.params.dishTaste;
    const tasteOfDish = await MenuItem.find({ work: dishTaste });
    console.log("Data fetched");
    res.status(200).json(tasteOfDish)
  } catch (error) {
    res.status(500).json({error: "Internal Error"})
  }
});
