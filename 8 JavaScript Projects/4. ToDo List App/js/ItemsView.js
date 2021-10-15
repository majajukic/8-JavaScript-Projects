export default class ItemsView {
    constructor(root, { onItemAdd, onItemDelete, onItemSelect} = {}) {
        this.root = root;
        this.onItemAdd = onItemAdd;
        this.onItemDelete = onItemDelete;
        this.onItemSelect = onItemSelect;
        this.root.innerHTML = `
            <h1>My ToDo List</h1>
            <div class="section-header">
                <input type="text" class="text-input" placeholder="What needs to be done?">
                <button class="add-item-btn">Add Item</button>
            </div>
            <hr>
            <ul class="list-items">
            </ul>
        `;

        //Event listener for addItem button:
        const btnAdd = this.root.querySelector(".add-item-btn");
        const inpText = this.root.querySelector(".text-input");

        btnAdd.addEventListener("click", () => {

            if(inpText.value != "") {

                this.onItemAdd(inpText.value);

                inpText.value = "";

            } else {
                alert("You must enter an item.");
            }
        });
    }

    //Private method for creating an individual HTML list item:
    _createListItem(id, content) {
        return `
            <div class="list-item" data-item-id="${id}">
                <li>${content}</li><button class="remove-item-btn"><i class="fas fa-times"></i></button>
            </div>
        `;
    }

    //Method for updating the list with each input / items passed are everything from LocalStorage:
    updateList(items) {
        const listContainer = this.root.querySelector(".list-items");

        listContainer.innerHTML = "";

        for(const item of items) {
            const listItems = this._createListItem(item.id, item.content);
            listContainer.insertAdjacentHTML("beforeend", listItems); //nest listItem inside ul element
        }

        //Eventlistener for deleting a note:
        const removeBtn = this.root.querySelectorAll(".remove-item-btn");
        //const item = this.root.querySelector(".list-item");

        const listItems = this.root.querySelector(".list-items");
        listItems.querySelectorAll(".list-item").forEach(item => {
            item.addEventListener("click", () => {
                const toDelete = confirm("Are you sure you want to delete this item?");
    
                if(toDelete) {
                    this.onItemDelete(item.dataset.itemId);
                }
            })
        });

      /*   removeBtn.forEach(btn => {
            btn.addEventListener("click", () => {
                const listItems = this.root.querySelector(".list-items");
                listItems.querySelectorAll(".list-item").forEach(item => {
                    const toDelete = confirm("Are you sure you want to delete this item?");
    
                    if(toDelete) {
                        this.onItemDelete(item.dataset.itemId);
                    }
                });
            });
        }); */
    }
}