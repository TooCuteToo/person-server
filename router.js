const express = require("express");
const Person = require("./models/person");

const router = express.Router();

router.get("/persons", (req, res) => Person.find({}).then((result) => res.json(result)));

router.get("/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then((result) => {
      if (result) res.json(result);
      else res.status(404).json({ error: "Person not found" });
    })
    .catch((error) => next(error));
});

// router.get("/info", (_req, res) => {
//   const number = persons.length;
//   const date = new Date();

//   const infoStr = `Phonebook has info for ${number} people\n${date}`;

//   res.send(infoStr);
// });

router.post("/persons", (req, res, next) => {
  if (!req.body.name || !req.body.number) {
    res.status(400).json({ error: "Name or number cant be null" });
  }

  const person = new Person({
    ...req.body,
  });

  person.save()
    .then((savedPerson) => res.json(savedPerson))
    .catch((error) => next(error));
});

router.put("/persons/:id", (req, res, next) => {
  if (!req.body.name || !req.body.number) {
    res.status(400).json({ error: "Name or number cant be null" });
  }

  Person.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      if (result) res.json(result);
      else res.status(400).json({ error: "Something wrong!!!" });
    })
    .catch((error) => next(error));
});

router.delete("/persons/:id", (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).end())
    .catch((error) => next(error));
});

module.exports = router;
