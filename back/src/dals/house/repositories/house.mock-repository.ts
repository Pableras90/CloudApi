import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db } from "../../mock-data.js";

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
  db.houses = db.houses.map((h) => (h.id === house.id ? { ...h, ...house } : h));
  return house;
};

export const mockRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number)=>
  paginatedHouseList(db.houses, page, pageSize),
  getHouse: async (id: number) => db.houses.find((h) => h.id === id),
  addReview: async (id: number, reviewerName: string, content: string,rating:number) => {
    const house = db.houses.find((h) => h.id === id);
    if (house) {     
      const dateReview = new Date();
      const newReview: Review = {
        reviewerName,
        content,
        rating,
        dateReview
      };

      house.reviews.push(newReview);
      await updateHouse(house);
      return newReview;
    }
  },
};
