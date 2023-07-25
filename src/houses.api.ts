import { Router } from "express";

import { getHouseList, getHouse, insertHouse } from "./mock-db.js";

export const housesApi = Router();

housesApi
  .get("/", async (req, res, next) => {
    try {
      const houseList = await getHouseList();
      res.send(houseList);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const houseId = Number(id);
    const house = await getHouse(houseId);
    res.send(house);
  })
  .post("/", async (req, res) => {
    const house = req.body;
    const newHouse = await insertHouse(house);
    res.status(201).send(newHouse);
  });
