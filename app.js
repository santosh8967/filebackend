const express = require("express");
const app = express();
const RestaurantsController = require("./Controllers/Restaurants.controllers");
const MentorController = require("./Controllers/Mentor.controller");
const StudentController = require("./Controllers/Student.controller");
const AuthenticationController = require("./Controllers/Authentication.controller");
const { checkJWTValidity } = require("./Middleware/Authentication.middleware");

app.use("/restaurants", RestaurantsController);
app.use("/mentors", checkJWTValidity, MentorController);
app.use("/student", StudentController);
app.use("/user", AuthenticationController);
module.exports=app;
