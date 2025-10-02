import List from "./List.js";
import {ListDisplay} from "./ListDisplay.js";

class ListService {
  constructor() {
    this.lists = [];

    const createListButton = document.querySelector("button.create-list");
    const newListDialog = document.querySelector("dialog.list-creator");
    const newListForm = newListDialog.querySelector("form.new-list");
    const newListTitle = newListForm.querySelector("input.title");
    const newListCancel = newListForm.querySelector("button.cancel");

    createListButton.addEventListener("click", () => {
      newListDialog.showModal();
    });

    newListCancel.addEventListener("click", () => {
      newListForm.reset();
      newListDialog.close();
    });

    newListForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newList = new List(newListTitle.value);
      this.lists.push(newList);
      newListForm.reset();
      newListDialog.close();
      ListDisplay.show(this.lists);      
    });
  }
}

export default new ListService();