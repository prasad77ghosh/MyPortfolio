import app from "./app.js";
import dotenv from "dotenv";
import ConnectDB from "./config/Database.js";

dotenv.config({ path: "backend/config/config.env" });
//handling uncought expection
process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log("Shutting down the server due to uncought exception");
  process.exit(1);
});

//Database connection
ConnectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// unHandled promise rejection
process.on("uncaughtException", (error) => {
  console.log(`Error: ${error}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
