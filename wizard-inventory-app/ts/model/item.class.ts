export class Item {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  toString(): string {
    return `Item: ID - ${this.id}, Name - ${this.name}`;
  }
}

export let itemList: Item[] = [];
export let item1: Item = new Item(1, "Wizard Staff");
export let item2: Item = new Item(2, "Healing Potion");

itemList.push(item1, item2);
