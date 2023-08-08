import { ObjectId } from "mongodb";
import { House, Review } from "../house.model.js";

export interface HouseRepository {
  getHouseList: (page?: number, pageSize?: number) => Promise<House[]>;
  getHouse: (id: string) => Promise<House>;
  addReview: (id: string, reviewerName: string, content: string,rating:number) => Promise<Review>;

}
