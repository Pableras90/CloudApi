import { Router } from "express";
import { houseRepository } from "#dals/index.js";
import {
  mapHouseListFromModelToApi,
  mapHouseFromModelToApi,
  mapReviewFromModelToApi
} from "./house.mappers.js";
export const housesApi = Router();
import { ObjectId } from "mongodb";

housesApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const houseList = await houseRepository.getHouseList(page, pageSize);
      res.send(mapHouseListFromModelToApi(houseList));
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    const { id } = req.params;
  
    const house = await houseRepository.getHouse(new ObjectId(id));;
    res.send(mapHouseFromModelToApi(house));
  })
  .post("/", async (req, res, next) => {
    try {
      const { houseId, reviewerName, content, rating } = req.body;
      const review = await houseRepository.addReview(houseId, reviewerName, content, rating);
      res.status(201).send(mapReviewFromModelToApi(review));
    } catch (error) {
      next(error);
    }
  });
