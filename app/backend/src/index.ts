import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(9000, () => {
  console.log("Server is running on http://localhost:9000");
});
