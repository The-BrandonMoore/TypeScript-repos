import promptSync from "prompt-sync";
import { Item, itemList } from "../model/item.class";
const prompt = promptSync();

export function commandMenu() {
  console.log("\nCOMMAND MENU");
  console.log("menu - View the command menu");
  console.log("view - View all items");
  console.log("grab - Grab an item");
  console.log("edit - Edit an item");
  console.log("drop - Drop an item");
  console.log("exit - Exit program\n");
}

export function commandPrompt(): string {
  let successfulAnswer: boolean = false;
  let commandString: string = "";
  while (successfulAnswer === false) {
    commandString = prompt("Command: ").toLowerCase();
    if (
      commandString != "exit" &&
      commandString != "menu" &&
      commandString != "grab" &&
      commandString != "drop" &&
      commandString != "edit" &&
      commandString != "view"
    ) {
      console.log("Please enter a valid menu command.");
      continue;
    } else {
      successfulAnswer = true;
    }
  }
  return commandString;
}

export function printItemList() {
  itemList.forEach((item) => {
    console.log(item.toString());
  });
}

export function grabItem(): Item[] {
  let itemCounter: number = 0;
  itemList.forEach((item) => {
    itemCounter++;
  });
  if (itemCounter >= 4) {
    console.log("Too many Items. Maximum number of items is 4.");
    console.log("Either drop an item, or choose another menu command.");
  } else {
    let itemId: number = 0;
    itemList.forEach((item) => {
      itemId = item.id;
    });
    itemId++;
    let newItem: Item = new Item(itemId, prompt("Enter item Name: "));
    itemList.push(newItem);
    console.log(newItem.name + " added to inventory.");
  }
  return itemList;
}

export function editItem() {
  let goodId: boolean = false;
  while (goodId === false) {
    let editId: number = parseInt(prompt("Enter Item ID: "));
    itemList.forEach((item) => {
      if (editId === item.id) {
        item.name = prompt("Enter new item name: ");
        goodId = true;
      }
    });
    if (goodId === false) {
      console.log("Item ID not found. Please enter a valid Item ID.");
    }
  }
}

export function dropItem(): Item[] {
  let dropId: number;
  let isFound: boolean = false;
  while (isFound === false) {
    dropId = parseInt(prompt("Enter item ID you wish to drop: "));
    itemList.forEach((item) => {
      if (dropId === item.id) {
        let itemIndex: number = itemList.indexOf(item);
        console.log(item.name + " has been dropped.");
        itemList.splice(itemIndex, 1);
        isFound = true;
        itemList.forEach((item) => {
          item.id = itemList.indexOf(item) + 1;
        });
      }
    });
    if (isFound === false) {
      console.log("Enter a valid Item ID.");
    }
  }
  return itemList;
}
