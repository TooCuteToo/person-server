const express = require("express");
const router = express.Router();
const persons = require("./persons.json");

router.get("/persons", (req, res) => res.json(persons));

router.get("/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((item) => item.id === id);

  if (!person) res.status(404).end();

  res.json(person);
});

router.get("/info", (req, res) => {
  const number = persons.length;
  const date = new Date();

  const infoStr = `Phonebook has info for ${number} people\n${date}`;

  res.send(infoStr);
});

router.post("/persons", (req, res) => {
  const id = Math.floor(Math.random(10, 1000));
  const checkDuplicatePerson = persons.find(
    (item) => item.name === req.body.name
  );

  if (!req.body.name || !req.body.number) {
    res.status(406).json({ error: "Name or number cant be null" });
  }

  if (checkDuplicatePerson) {
    res
      .status(406)
      .json({ error: "The name is already exists in the phonebook" });
  }

  const person = { ...req.body, id };
  persons.push(person);
  res.json(person);
});

router.put("/persons/:id", (req, res) => {
  const person = persons.find((item) => item.name === req.body.name);
  person.number = req.body.number;

  res.json(person);
});

router.delete("/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((item) => item.id === id);

  if (person) {
    persons = persons.filter((elem) => elem.id !== id);
    res.status(200).end();
  } else res.status(404).end();
});

module.exports = router;
