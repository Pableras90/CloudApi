import { Router } from "express";
import { getHouse, insertHouse } from "./mock-db.js";
import { houseRepository } from "#dals/index.js";

export const housesApi = Router();

housesApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      let houseList = await houseRepository.getHouseList();
      if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, houseList.length);
        houseList = houseList.slice(startIndex, endIndex);
      }
      res.send(houseList);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const houseId = Number(id);
    const house = await getHouse(houseId);
    res.cookie("my-cookie", "my-token", {
      sameSite: "none",
      secure: true,
    });
    res.send(house);
  })
  .post("/", async (req, res) => {
    const house = req.body;
    const newHouse = await insertHouse(house);
    res.status(201).send(newHouse);
  });
