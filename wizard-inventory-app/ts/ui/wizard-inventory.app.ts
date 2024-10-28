import * as validation from "../util/validation-io";
import promptSync from "prompt-sync";

const prompt = promptSync();

console.log("The Wizard Inventory Game!");

let command: string = "";
while (command != "exit") {
  validation.commandMenu();
  //prompt user for command
  command = validation.commandPrompt();
  switch (command) {
    case "menu":
      validation.commandMenu();
      break;
    case "view":
      validation.printItemList();
      break;
    case "grab":
      validation.grabItem();
      break;
    case "edit":
      validation.editItem();
      break;
    case "drop":
      validation.dropItem();
      break;
    case "exit":
      break;
    default:
      console.log("Please enter a valid menu command.");
      break;
  }
  //switch statement for different choices
}
console.log("Goodbye!");
