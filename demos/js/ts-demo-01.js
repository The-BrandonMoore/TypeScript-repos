"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const square_class_1 = require("./square.class");
let nbr1 = 11;
let admin = false;
let firstName = "George";
let price = 25.99;
let message = `Hello, ${firstName}, the price is ${price}, ${nbr1} days left, and admin is ${admin}`;
console.log(message);
let movie = {
    id: 1,
    title: "Star Wars",
    year: 1977,
    rating: "PG",
    director: "George Lucas",
};
console.log(movie);
let evenNumbers = [2, 4, 6, 8, 10];
console.log("evenNumbers = " + evenNumbers);
let s1 = new square_class_1.Square(5);
console.log("Square area = " + s1.area());