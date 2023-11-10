const express = require('express');
const mongoose = require('mongoose');

let app = express();

mongoose.connect("mongodb://localhost:27017/your-database", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
});

let userModel = new mongoose.model("users", userSchema);

const coursesSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
    Degree: String,
    address: String,
});

let coursesModel = new mongoose.model("courses", coursesSchema);

let newCourse = new coursesModel({
    name: "Hussam Mamdouh",
    age: 21,
    phone: "01129670204",
    Degree: "A+",
    address: "Suez,Egypt"
});

let newUser = new userModel({
    name: "Hussam Mamdouh",
    age: 21,
    password: 4716,
    phone: "010145502170",
}).save();

mongoose.connection.on('connected', () => {
    console.log("Database is now connected");
});

mongoose.connection.on('error', (err) => {
    console.log("Database connection error: " + err);
});

app.listen(3000, () => {
    console.log('Server is open');
});