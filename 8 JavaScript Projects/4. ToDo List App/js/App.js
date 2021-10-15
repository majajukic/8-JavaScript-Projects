import ItemsAPI from "./ItemsAPI.js";
import ItemsView from "./ItemsView.js";

export default class App {
    constructor(root) {
        this.items = [];
        this.view = new ItemsView(root, this._handlers());

        this._refreshItemList();
    }

    _refreshItemList() {
        const items = ItemsAPI.getAllItems();

        this._setItems(items);
    }

    _setItems(items) {
        this.items = items;
        this.view.updateList(items);
    }

    _handlers() {
        return {
            onItemAdd: inputText => {
                const newItem = {
                    content: inputText
                }

                ItemsAPI.addItem(newItem);
                this._refreshItemList();
            },
            onItemDelete: itemId => {
                ItemsAPI.deleteItem(itemId);
                this._refreshItemList();
            }
        };
    }
}