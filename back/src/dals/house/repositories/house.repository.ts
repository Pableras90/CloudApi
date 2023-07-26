import { House, Review } from "../house.model.js";

export interface HouseRepository {
  getHouseList: (page?: number, pageSize?: number) => Promise<House[]>;
  getHouse: (id: number) => Promise<House>;
  addReview: (id: number, reviewerName: string, content: string,rating:number) => Promise<Review>;

}
