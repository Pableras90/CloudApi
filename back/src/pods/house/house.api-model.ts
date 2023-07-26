export interface House {
    id: number;
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
  