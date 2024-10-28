"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropItem = exports.editItem = exports.grabItem = exports.printItemList = exports.commandPrompt = exports.commandMenu = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const item_class_1 = require("../model/item.class");
const prompt = (0, prompt_sync_1.default)();
function commandMenu() {
    console.log("\nCOMMAND MENU");
    console.log("menu - View the command menu");
    console.log("view - View all items");
    console.log("grab - Grab an item");
    console.log("edit - Edit an item");
    console.log("drop - Drop an item");
    console.log("exit - Exit program\n");
}
exports.commandMenu = commandMenu;
function commandPrompt() {
    let successfulAnswer = false;
    let commandString = "";
    while (successfulAnswer === false) {
        commandString = prompt("Command: ").toLowerCase();
        if (commandString != "exit" &&
            commandString != "menu" &&
            commandString != "grab" &&
            commandString != "drop" &&
            commandString != "edit" &&
            commandString != "view") {
            console.log("Please enter a valid menu command.");
            continue;
        }
        else {
            successfulAnswer = true;
        }
    }
    return commandString;
}
exports.commandPrompt = commandPrompt;
function printItemList() {
    item_class_1.itemList.forEach((item) => {
        console.log(item.toString());
    });
}
exports.printItemList = printItemList;
function grabItem() {
    let itemCounter = 0;
    item_class_1.itemList.forEach((item) => {
        itemCounter++;
    });
    if (itemCounter >= 4) {
        console.log("Too many Items. Maximum number of items is 4.");
        console.log("Either drop an item, or choose another menu command.");
    }
    else {
        let itemId = 0;
        item_class_1.itemList.forEach((item) => {
            itemId = item.id;
        });
        itemId++;
        let newItem = new item_class_1.Item(itemId, prompt("Enter item Name: "));
        item_class_1.itemList.push(newItem);
        console.log(newItem.name + " added to inventory.");
    }
    return item_class_1.itemList;
}
exports.grabItem = grabItem;
function editItem() {
    let goodId = false;
    while (goodId === false) {
        let editId = parseInt(prompt("Enter Item ID: "));
        item_class_1.itemList.forEach((item) => {
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
exports.editItem = editItem;
function dropItem() {
    let dropId;
    let isFound = false;
    while (isFound === false) {
        dropId = parseInt(prompt("Enter item ID you wish to drop: "));
        item_class_1.itemList.forEach((item) => {
            if (dropId === item.id) {
                let itemIndex = item_class_1.itemList.indexOf(item);
                console.log(item.name + " has been dropped.");
                item_class_1.itemList.splice(itemIndex, 1);
                isFound = true;
                item_class_1.itemList.forEach((item) => {
                    item.id = item_class_1.itemList.indexOf(item) + 1;
                });
            }
        });
        if (isFound === false) {
            console.log("Enter a valid Item ID.");
        }
    }
    return item_class_1.itemList;
}
exports.dropItem = dropItem;
