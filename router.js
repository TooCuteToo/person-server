const express = require("express");
const Person = require("./models/person");

const router = express.Router();

router.get("/persons", (req, res) => Person.find({}).then((result) => res.json(result)));

router.get("/persons/:id", (req, res) => {
  Person.findById(req.params.id)
    .then((result) => res.json(result))
    .catch(() => res.status(404).json({ error: "Person not found" }));
});

// router.get("/info", (_req, res) => {
//   const number = persons.length;
//   const date = new Date();

//   const infoStr = `Phonebook has info for ${number} people\n${date}`;

//   res.send(infoStr);
// });

router.post("/persons", (req, res) => {
  if (!req.body.name || !req.body.number) {
    res.status(406).json({ error: "Name or number cant be null" });
  }

  const person = new Person({
    ...req.body,
  });

  person.save().then((savedPerson) => res.json(savedPerson));
});

router.put("/persons/:id", (req, res) => {
  Person.findByIdAndUpdate(req.params.id, { ...req.body })
    .then(res.status(201).end())
    .catch(res.status(401).end());
});

router.delete("/persons/:id", (req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).end())
    .catch(() => res.status(401).end());
});

module.exports = router;
