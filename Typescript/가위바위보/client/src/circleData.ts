import { Item } from "./item.js";

export class CircleData {
    items: Item[];

    constructor (items: Item[]) {
        this.items = items;
    }

    getAll() {
        return this.items;
    }

    getNext(item: Item) {
        let idx = this.items.indexOf(item);
        let next = this.items[idx + 1];

        return next ? next : this.items[0];
    }
}
