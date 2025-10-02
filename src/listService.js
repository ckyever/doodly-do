import List from "./List.js";
import {ListDisplay} from "./ListDisplay.js";

class ListService {
  constructor() {
    // CKYTODO Placeholder for development only
    this.lists = [new List("one"), new List("two"), new List("three"), new List("four")];
    ListDisplay.show(this.lists);      

    const listBoard = document.querySelector("div.list-board");
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

    listBoard.addEventListener("click", event => {
      if (event.target.classList.contains("add-todo")) {
        const list = event.target.parentElement;
        const listId = list ? list.id : null;
        console.log(`Add todo for ${listId}`);
      }
    });
  }
}

export default new ListService();