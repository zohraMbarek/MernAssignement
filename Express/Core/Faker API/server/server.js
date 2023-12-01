//import express
const express=require('express')
const app=express()
const PORT=5000
//import faker
const {faker}=require('@faker-js/faker')
//create user function
const createUser = () => ({
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id:faker.string.uuid()
});
//create company function
const createCompany = () =>( {
        _id:faker.string.uuid(),
        companyName:faker.company.name(),
        companyAdress:{
                       street:faker.location.streetAddress(),
                       city:faker.location.city(),
                       state:faker.location.state(),
                       zipCode:faker.location.zipCode(),
                       country:faker.location.country()
                      }
    });
//geting new user
app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    console.log(newFakeUser)
    res.json( newFakeUser );
});
//getting new company
app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json( newFakeCompany );
});
//getting new user and new company
app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const userCompany = {
      user: newUser,
      company: newCompany,
    };
    res.json(userCompany);
  });

app.listen(PORT, () => console.log(`express server running on port ${PORT}`));