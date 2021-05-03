const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const router = require("./router");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :json")
);

morgan.token("json", (req, res) => JSON.stringify(req.body));

app.use("/api", router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
