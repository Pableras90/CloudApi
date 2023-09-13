import { db } from "#core/servers/index.js";
const updateHouse = async (house) => {
    const value = await db
        .collection("listingsAndReviews")
        .findOneAndUpdate({ _id: house._id }, { $set: house }, { upsert: true, returnDocument: "after" });
    return value;
};
export const dbRepository = {
    getHouseList: async (page, pageSize) => {
        const skip = Boolean(page) ? (page - 1) * pageSize : 0;
        const limit = pageSize ?? 0;
        return await db
            .collection("listingsAndReviews")
            .find()
            .skip(skip)
            .limit(limit)
            .toArray();
    },
    getHouse: async (id) => {
        const value = await db.collection("listingsAndReviews").findOne({
            _id: id,
        });
        console.log(value);
        return value;
    },
    addReview: async (id, review) => {
        const { acknowledged } = await db
            .collection("listingsAndReviews")
            .updateOne({ _id: id }, { $push: { reviews: review } });
        return acknowledged;
    },
};
