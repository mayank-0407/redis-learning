import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const redisClient = createClient();

app.post("/", (req, res) => {
  console.log("request Recieved");
  const { name, email } = req.body;

  try {
    redisClient.lPush("users", JSON.stringify({ name, email }));
    res.status(200).json({ message: "Message Queued" });
  } catch (e) {
    res.status(400).json({ message: "Error Encountered" + e });
  }
});

const startServer = async () => {
  try {
    await redisClient.connect();

    console.log("Redis Client Connected");

    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  } catch (e) {
    console.log("Error Starting the server");
  }
};

startServer();
