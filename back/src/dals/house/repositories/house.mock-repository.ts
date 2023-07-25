import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db } from "../../mock-data.js";

const insertHouse = (house: House) => {
  const id = (db.houses.length + 1);
  const newHouse: House = {
    ...house,
    id,
  };

  db.houses = [...db.houses, newHouse];
  return newHouse;
};

const updateHouse = async (house: House) => {
  db.houses = db.houses.map((h) => (h.id === house.id ? { ...h, ...house } : h));
  return house;
};

export const mockRepository: HouseRepository = {
  getHouseList: async () => db.houses,
  getHouse: async (id: number) => db.houses.find((h) => h.id === id),
  addReview: async (id: number, reviewerName: string, content: string,rating:number) => {
    const house = db.houses.find((h) => h.id === id);
    if (!house) {
      return false;
    }

    const dateReview = new Date();
    const newReview: Review = {
      reviewerName,
      content,
      rating,
      dateReview
    };

    house.reviews.push(newReview);
    await updateHouse(house);
    return true;
  },
};
