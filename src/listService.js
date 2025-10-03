import List from "./List.js";
import {listDisplay} from "./listDisplay.js";
import Storage from "./Storage.js"
import todoService from "./todoService.js";

class ListService {
  initialise() {
    listDisplay.show(Storage.lists);      
    this.addEventListeners();
  }

  addEventListeners() {
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
      Storage.lists.push(newList);
      newListForm.reset();
      newListDialog.close();
      listDisplay.show(Storage.lists);      
    });

    listBoard.addEventListener("click", event => {
      if (event.target.classList.contains("add-todo")) {
        const listCard = event.target.parentElement;
        const listElement = listCard.querySelector("ul.list");
        const todo = todoService.addTodo(listElement);
        const listId = listElement ? listCard.id : null;
        if (listId) {
          const list = Storage.lists[Storage.lists.findIndex(list => list.id === listId)];
          list.addTodo(todo);
        }
      }
    });

    todoService.listenForTodoUpdates(listBoard);
  }
}

export default new ListService();