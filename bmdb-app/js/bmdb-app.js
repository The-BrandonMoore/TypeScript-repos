"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actor_class_1 = require("./actor.class");
const credit_class_1 = require("./credit.class");
const movie_class_1 = require("./movie.class");
let m1 = new movie_class_1.Movie("Test Movie 1", 1990, "PG", "Ron Swanson");
let m2 = new movie_class_1.Movie("Test Movie 2", 1992, "PG", "Ron Swanson");
let m3 = new movie_class_1.Movie("Test Movie 3", 1994, "PG", "Ron Swanson");
let m4 = new movie_class_1.Movie("Test Movie 4", 1995, "PG", "Ron Swanson");
let m5 = new movie_class_1.Movie("Test Movie 5", 1997, "PG", "Ron Swanson");
let movieList = [];
movieList.push(m1, m2, m3, m4, m5);
let a1 = new actor_class_1.Actor("John", "Johnson", "M", new Date("1987-10-10"));
let a2 = new actor_class_1.Actor("Jack", "Johnson", "M", new Date("1985-02-10"));
let a3 = new actor_class_1.Actor("Mark", "Johnson", "M", new Date("1988-05-22"));
let a4 = new actor_class_1.Actor("Tom", "Johnson", "M", new Date("1967-05-02"));
let a5 = new actor_class_1.Actor("Edward", "Johnson", "M", new Date("1977-09-10"));
let actorList = [];
actorList.push(a1, a2, a3, a4, a5);
let c1 = new credit_class_1.Credit(m1, a1, "Barry");
let c2 = new credit_class_1.Credit(m2, a4, "Gary");
let c3 = new credit_class_1.Credit(m3, a3, "Jerry");
let c4 = new credit_class_1.Credit(m4, a2, "Larry");
let c5 = new credit_class_1.Credit(m5, a5, "Curly");
let creditList = [];
creditList.push(c1, c2, c3, c4, c5);
movieList.forEach((m) => {
    console.log(m);
});
actorList.forEach((a) => {
    console.log(a);
});
creditList.forEach((c) => {
    console.log(c);
});
