"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friend_class_1 = require("./friend.class");
let friend1 = new friend_class_1.Friend("Tom", 45, "TomsEmail@email.com", false);
let friend2 = new friend_class_1.Friend("Barry", 35, "email@email.com", true);
let friend3 = new friend_class_1.Friend("Adam", 46, "otheremail@email.com", false);
let friend4 = new friend_class_1.Friend("Jeff", 38, "jeff123@email.com", false);
let friend5 = new friend_class_1.Friend("Larry", 37, "barryisnotlarry@email.com", false);
let friendsList = [];
friendsList.push(friend1, friend2, friend3, friend4, friend5);
console.log("Name   Age    email          BFF");
friendsList.forEach((friend) => {
    let bf = "";
    if (friend.bff == false) {
        bf = "No";
    }
    else {
        bf = "Yes";
    }
    console.log(friend.name + " " + friend.age + " " + friend.email + " " + bf);
});
