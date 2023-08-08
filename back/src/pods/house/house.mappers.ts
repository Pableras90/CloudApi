import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";
import { ObjectId } from "mongodb";

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id,
  description: house.description,
    address: house.address,
    amenities: house.amenities,
    reviews:  house.reviews ? house.reviews.map(mapReviewFromModelToApi) : [],
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseFromModelToApi);


export const mapReviewFromModelToApi = (review: model.Review): apiModel.Review => ({
    reviewerName: review.reviewerName,
    content: review.content,
    rating: review.rating,
  });



  export const mapHouseFromApiToModel = (house: apiModel.House): model.House => {
    const id =house.id;
    return {
      _id: id,
      description: house.description,
      address: house.address,
      amenities: house.amenities,
      reviews: house.reviews ? house.reviews.map(mapReviewFromApiToModel) : [],
    };
  };

export const mapReviewFromApiToModel = (review: apiModel.Review): model.Review => ({
  reviewerName: review.reviewerName,
  content: review.content,
  rating: review.rating,
});


