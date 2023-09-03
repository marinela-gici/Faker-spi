const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

const createUser = () => {
  return {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.database.mongodbObjectId(),
  };
};

const createCompany = () => {
  return {
    _id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: [
      faker.location.streetAddress(),
      faker.location.city(),
      faker.location.state(),
      faker.location.zipCode(),
      faker.location.country(),
    ],
  };
};

app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  res.json({ user: createUser(), company: createCompany() });
});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
