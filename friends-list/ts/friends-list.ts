import { Friend } from "./friend.class";

let friend1 = new Friend("Tom", 45, "TomsEmail@email.com", false);
let friend2 = new Friend("Barry", 35, "email@email.com", true);
let friend3 = new Friend("Adam", 46, "otheremail@email.com", false);
let friend4 = new Friend("Jeff", 38, "jeff123@email.com", false);
let friend5 = new Friend("Larry", 37, "barryisnotlarry@email.com", false);

let friendsList: Friend[] = [];

friendsList.push(friend1, friend2, friend3, friend4, friend5);

console.log("Name   Age    email          BFF");
friendsList.forEach((friend) => {
  let bf: string = "";
  if (friend.bff == false) {
    bf = "No";
  } else {
    bf = "Yes";
  }
  console.log(friend.name + " " + friend.age + " " + friend.email + " " + bf);
});
