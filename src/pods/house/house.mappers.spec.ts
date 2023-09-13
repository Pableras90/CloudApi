import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";

import {
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,
  mapReviewFromModelToApi,
  mapHouseFromApiToModel,
  mapReviewFromApiToModel
} from "./house.mappers.js"; 

describe("Mapper functions", () => {
  describe("mapHouseFromModelToApi", () => {
    it("should map House from model to API format", () => {
      // Arrange
      const houseModel: model.House = {
        _id: "Sample id",
        description: "Sample house",
        address: "Sample address",
        amenities: { Habitaciones: 3, camas: 4, baños: 2 },
        reviews: []
      };

      // Act
      const apiHouse: apiModel.House = mapHouseFromModelToApi(houseModel);

      // Assert
      expect(apiHouse.id).toEqual(houseModel._id);
      expect(apiHouse.description).toEqual(houseModel.description);
    });
  });
  describe("mapHouseListFromModelToApi", () => {
    it("should map House List from model to API format", () => {
      // Arrange
      const houseList: model.House[] =[ {
    _id: "Sample id",
        description: "Sample house",
        address: "Sample address",
        amenities: { Habitaciones: 3, camas: 4, baños: 2 },
        reviews: []
        
      },
      {
        _id: "Sample id 2",
            description: "Sample house 2",
            address: "Sample address 2",
            amenities: { Habitaciones: 1, camas: 3,baños: 5 },
            reviews: [{ reviewerName: "Reviewer 1", content: "Review 1", rating: 5 },
            { reviewerName: "Reviewer 2", content: "Review 2", rating: 4 }]
            
          }
    
    ];

      // Act
      const apiHouseList: apiModel.House[] = mapHouseListFromModelToApi(houseList);

      // Assert
      expect(apiHouseList.length).toEqual(houseList.length);
      apiHouseList.forEach((apiHouse,index)=>{
          expect(apiHouse.id).toEqual(houseList[index]._id);
          expect(apiHouse.description).toEqual(houseList[index].description);
          expect(apiHouse.amenities).toEqual(houseList[index].amenities);
          if (!houseList[index].reviews) {
            expect(apiHouse.reviews).toEqual([]);
          } else {
            expect(apiHouse.reviews).toEqual(houseList[index].reviews.map(mapReviewFromModelToApi));
          }
      })
      
    });
  });
  describe("mapHouseFromApiToModel", () => {
    it("should map House from API to Model format", () => {
      // Arrange
      const apiHouse: apiModel.House = {
        id: "Sample id",
        description: "Sample house",
        address: "Sample address",
        amenities: { Habitaciones: 3, camas: 4, baños: 2 },
        reviews: []
      };
  
      // Act
      const modelHouse: model.House = mapHouseFromApiToModel(apiHouse);
  
      // Assert
      expect(modelHouse._id).toEqual(apiHouse.id);
      expect(modelHouse.description).toEqual(apiHouse.description);
      expect(modelHouse.address).toEqual(apiHouse.address);
      expect(modelHouse.amenities).toEqual(apiHouse.amenities);
      expect(modelHouse.reviews).toEqual([]);
    });
  });
  describe('mapReviewFromApiToModel', () => {
    it('should map Review from API to Model format', () => {
      // Arrange
      const apiReview: apiModel.Review = {
        reviewerName: 'John',
        content: 'Great place to stay!',
        rating: 5,
      };
  
      // Act
      const modelReview: model.Review = mapReviewFromApiToModel(apiReview);
  
      // Assert
      expect(modelReview.reviewerName).toEqual(apiReview.reviewerName);
      expect(modelReview.content).toEqual(apiReview.content);
      expect(modelReview.rating).toEqual(apiReview.rating);
    });
  });
  describe('mapReviewFromModelToApi', () => {
    it('should map Review from Model to API format', () => {
      // Arrange
      const modelReview: model.Review = {
        reviewerName: 'Ana',
        content: 'Una estancia muy agradable.',
        rating: 4,
      };
  
      // Act
      const apiReview: apiModel.Review = mapReviewFromModelToApi(modelReview);
  
      // Assert
      expect(apiReview.reviewerName).toEqual(modelReview.reviewerName);
      expect(apiReview.content).toEqual(modelReview.content);
      expect(apiReview.rating).toEqual(modelReview.rating);
    });
  });
});
