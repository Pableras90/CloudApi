import { ObjectId } from "mongodb";

export interface House {
    _id: string;
    description: string;
    address: string;
    amenities: Amenity;
    reviews?: Review[];
  }

  export interface Amenity{
    Habitaciones: number;
      camas: number;
      baños: number;
  }


  export interface Review {
    reviewerName: string;
    content: string;
    rating: number;
    dateReview?: Date;
  }
  