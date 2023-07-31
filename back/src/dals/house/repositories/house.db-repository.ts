import { HouseRepository } from "./house.repository.js";
import { House } from "../house.model.js";
import { ObjectId } from "mongodb";
import { db } from '#core/servers/index.js';

export const dbRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => {
    return await db.collection<House>("airbnb").find().toArray();
  },
  getHouse: async (id: ObjectId) => {
    throw new Error("Not implemented");
  },
  addReview: async (
    id: ObjectId,
    reviewerName: string,
    content: string,
    rating: number
  ) => {
    throw new Error("Not implemented");
  },
};
