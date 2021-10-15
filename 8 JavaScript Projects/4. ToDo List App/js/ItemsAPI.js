export default class ItemsAPI {

    static getAllItems() {

        const items = JSON.parse(localStorage.getItem("itemsapp-items") || "[]");

        return items;
    }

    static addItem(newItem) {

        const items = ItemsAPI.getAllItems();

        newItem.id = Math.floor(Math.random() * 1000000);

        items.push(newItem);

        localStorage.setItem("itemsapp-items", JSON.stringify(items));
    }

    static deleteItem(id) {

        const items = ItemsAPI.getAllItems();

        const newItems = items.filter(item => item.id != id);

        localStorage.setItem("itemsapp-items", JSON.stringify(newItems)); 
    }
}