require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const router = require("./router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :json"),
);

morgan.token("json", (req) => JSON.stringify(req.body));

app.use("/api", router);

const errorHandler = (error, req, res, next) => {
  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
