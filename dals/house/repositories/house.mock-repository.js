import { db } from "../../mock-data.js";
const paginatedHouseList = (houseList, page, pageSize) => {
    let paginatedHouseList = [...houseList];
    if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
        paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
    }
    return paginatedHouseList;
};
const updateHouse = async (house) => {
    db.houses = db.houses.map((h) => (h._id === house._id ? { ...h, ...house } : h));
    return house;
};
export const mockRepository = {
    getHouseList: async (page, pageSize) => paginatedHouseList(db.houses, page, pageSize),
    getHouse: async (houseId) => {
        return db.houses.find((h) => h._id === houseId);
    },
    addReview: async (id, review) => {
        const house = db.houses.find((h) => h._id === id);
        if (house) {
            const dateReview = new Date();
            const newReview = {
                ...review,
                dateReview,
            };
            house.reviews.push(newReview);
            await updateHouse(house);
            return true; // Return a boolean indicating success
        }
        return false; // Return a boolean indicating failure
    },
};
