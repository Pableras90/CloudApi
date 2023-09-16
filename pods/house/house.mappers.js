export const mapHouseFromModelToApi = (house) => ({
    id: house._id,
    description: house.description,
    address: house.address,
    amenities: house.amenities,
    reviews: house.reviews ? house.reviews.map(mapReviewFromModelToApi) : [],
});
export const mapHouseListFromModelToApi = (houseList) => houseList.map(mapHouseFromModelToApi);
export const mapReviewFromModelToApi = (review) => ({
    reviewerName: review.reviewerName,
    content: review.content,
    rating: review.rating,
});
export const mapHouseFromApiToModel = (house) => {
    const id = house.id;
    return {
        _id: id,
        description: house.description,
        address: house.address,
        amenities: house.amenities,
        reviews: house.reviews ? house.reviews.map(mapReviewFromApiToModel) : [],
    };
};
export const mapReviewFromApiToModel = (review) => ({
    reviewerName: review.reviewerName,
    content: review.content,
    rating: review.rating,
    dateReview: new Date(),
});
