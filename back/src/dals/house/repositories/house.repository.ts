import { House } from "../house.model.js";

export interface HouseRepository {
  getHouseList: () => Promise<House[]>;
  getHouse: (id: number) => Promise<House>;
  addReview: (id: number, reviewerName: string, content: string,rating:number) => Promise<boolean>;

}
