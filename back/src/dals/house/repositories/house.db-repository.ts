import { HouseRepository } from "./house.repository.js";
import { House } from "../house.model.js";

export const dbRepository: HouseRepository = {
  getHouseList: async () => {
    throw new Error("Not implemented");
  },
  getHouse: async (id: number) => {
    throw new Error("Not implemented");
  },
  addReview: async (
    id: number,
    reviewerName: string,
    content: string,
    rating: number
  ) => {
    throw new Error("Not implemented");
  },
};
