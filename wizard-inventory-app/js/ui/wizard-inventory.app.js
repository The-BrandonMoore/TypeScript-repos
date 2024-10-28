"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation = __importStar(require("../util/validation-io"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
console.log("The Wizard Inventory Game!");
let command = "";
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
