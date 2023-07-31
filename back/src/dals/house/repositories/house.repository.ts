import { ObjectId } from "mongodb";
import { House, Review } from "../house.model.js";

export interface HouseRepository {
  getHouseList: (page?: number, pageSize?: number) => Promise<House[]>;
  getHouse: (id: ObjectId) => Promise<House>;
  addReview: (id: ObjectId, reviewerName: string, content: string,rating:number) => Promise<Review>;

}
