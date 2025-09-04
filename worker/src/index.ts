import { createClient } from "redis";

const redisClient = createClient();

const startServer = async () => {
  try {
    await redisClient.connect();
    console.log("Redis Client Connected");

    while (true) {
      const response = await redisClient.brPop("users", 0); // for pop we use rPop but it will pop the elements
      // and it will return null again and again so we use brPop with will block the
      // pop operations until anything is pushed and after that it works normally
      console.log(response);
    }
  } catch (e) {
    console.log("Error Starting the server");
  }
};

startServer();
