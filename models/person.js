/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
require("dotenv").config();
const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;
// const url = `mongodb+srv://Bao2001181020:${password}@personcluster.afvh8.mongodb.net/person-app?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,
})
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("error connecting to MongoDB", error.message));

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

personSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);
