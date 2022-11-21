import express from "express";
import ErrorMiddleWare from "./middlewares/Error.js";

const app = express();

app.get("/", (req, res, next) => {
  res.send({
    message: "its working",
  });
});

app.use(ErrorMiddleWare);
export default app;
