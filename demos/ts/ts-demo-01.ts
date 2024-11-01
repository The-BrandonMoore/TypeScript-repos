import { Square } from "./square.class";

let nbr1: number = 11;
let admin: boolean = false;
let firstName: string = "George";
let price: number = 25.99;

let message: string = `Hello, ${firstName}, the price is ${price}, ${nbr1} days left, and admin is ${admin}`;
console.log(message);

let movie = {
  id: 1,
  title: "Star Wars",
  year: 1977,
  rating: "PG",
  director: "George Lucas",
};

console.log(movie);

let evenNumbers: number[] = [2, 4, 6, 8, 10];
console.log("evenNumbers = " + evenNumbers);

let s1: Square = new Square(5);
console.log("Square area = " + s1.area());
