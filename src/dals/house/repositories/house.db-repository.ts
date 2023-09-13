import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { ObjectId, WithId } from "mongodb";
import { db } from "#core/servers/index.js";

const updateHouse = async (house: House) => {
  const value = await db
    .collection<House>("listingsAndReviews")
    .findOneAndUpdate(
      { _id: house._id },
      { $set: house },
      { upsert: true, returnDocument: "after" }
    );
  return value;
};

export const dbRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = pageSize ?? 0;
    return await db
      .collection<House>("listingsAndReviews")
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();
  },
  getHouse: async (id: string) => {
    const value = await db.collection<House>("listingsAndReviews").findOne({
      _id: id,
    });
    console.log(value);
    return value;
  },
  addReview: async (id: string, review: Review) => {
    const { acknowledged } = await db
      .collection<House>("listingsAndReviews")
      .updateOne({ _id: id }, { $push: { reviews: review } });

    return acknowledged;
  },
};
