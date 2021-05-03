const morgan = require("morgan");
const express = require("express");
const app = express();

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Dan Abramov",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Marry Poppendick",
    number: "39-23-6423122",
  },
  {
    id: 4,
    name: "Ada Lovelace",
    number: "12-43-234345",
  },
];

app.use(express.json());

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :json")
);

morgan.token("json", (req, res) => JSON.stringify(req.body));

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((item) => item.id === id);

  if (!person) res.status(404);

  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((item) => item.id === id);

  if (person) {
    // persons = persons.filter((elem) => elem.id !== id);
    res.status(200).end();
  }

  res.status(404).end();
});

app.post("/api/persons", (req, res) => {
  const id = Math.floor(Math.random(10, 1000));
  const person = persons.find((item) => item.name === req.body.name);

  if (!req.body.name || !req.body.number) {
    res.status(406).json({ error: "Name or number cant be null" });
  }

  if (person) {
    res
      .status(406)
      .json({ error: "The name is already exists in the phonebook" });
  }

  res.send({ ...req.body, id });
});

app.get("/info", (req, res) => {
  const number = persons.length;
  const date = new Date();

  const infoStr = `Phonebook has info for ${number} people\n${date}`;

  res.send(infoStr);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
