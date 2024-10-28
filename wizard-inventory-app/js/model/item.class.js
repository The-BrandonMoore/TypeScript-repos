"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.item2 = exports.item1 = exports.itemList = exports.Item = void 0;
class Item {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    toString() {
        return `Item: ID - ${this.id}, Name - ${this.name}`;
    }
}
exports.Item = Item;
exports.itemList = [];
exports.item1 = new Item(1, "Wizard Staff");
exports.item2 = new Item(2, "Healing Potion");
exports.itemList.push(exports.item1, exports.item2);
