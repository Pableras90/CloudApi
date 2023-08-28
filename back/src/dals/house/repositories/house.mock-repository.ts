import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db } from "../../mock-data.js";
import { ObjectId } from "mongodb";

const paginatedHouseList = (
     houseList: House[],
    page: number,
     pageSize: number
   ): House[] => {
     let paginatedHouseList = [...houseList];
     if (page && pageSize) {
       const startIndex = (page - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
      paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
    }
  
    return paginatedHouseList;
   };

const updateHouse = async (house: House) => {
  db.houses = db.houses.map((h) => (h._id === house._id ? { ...h, ...house } : h));
  return house;
};

export const mockRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number)=>
  paginatedHouseList(db.houses, page, pageSize),
  getHouse: async (houseId: string) => {
    return db.houses.find((h) => h._id === houseId);
  },
  addReview: async (id: string, review:Review) => {
    const house = db.houses.find((h) => h._id === id);
    if (house) {
      const dateReview = new Date();
      const newReview: Review = {
        ...review,
        dateReview
      };

      house.reviews.push(newReview);
      await updateHouse(house);
      return newReview;
    }
  },
};
