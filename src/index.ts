import express from "express";
import { getHouseList, getHouse } from "./mock-db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("My houses list");
});

app.get("/api/houses", async (req, res) => {
  const houseList = await getHouseList();
  res.send(houseList);
});

app.get("/api/books/:id", async (req, res) => {
  const { id } = req.params;
  const houseId = Number(id);
  const house = await getHouse(houseId);
  res.send(house);
});
app.listen(3000, () => {
  console.log("Server ready at port 3000");
});
