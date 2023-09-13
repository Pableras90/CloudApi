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
      console.log("Calling getHouseList in house.rest-api.ts");
      const houseList = await houseRepository.getHouseList(page, pageSize);
      console.log("Received house list in house.rest-api.ts:", houseList);
      res.send(mapHouseListFromModelToApi(houseList));
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const house = await houseRepository.getHouse(id);
      res.send(mapHouseFromModelToApi(house));
    } catch (error) {
      next(error);
    }
  })
  .patch("/:id/reviews", async (req, res, next) => {
    try {
      const { id } = req.params;
      const { reviewerName, content, rating } = req.body;
      await houseRepository.addReview(id, {
        reviewerName,
        content,
        rating,
      });
      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  });
