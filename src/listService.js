import List from "./List.js";
import { listDisplay } from "./listDisplay.js";
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
      if (
        event.target.classList.contains("add-todo") ||
        event.target.classList.contains("delete-list")
      ) {
        const listCard = event.target.closest(".list-card");
        const listElement = listCard.querySelector("ul.list");
        const listId = listElement ? listCard.id : null;
        const listIndex = Storage.lists.findIndex(list => list.id === listId)

        if (event.target.classList.contains("add-todo")) {
          const todo = todoService.addTodo(listElement);
          const list = Storage.lists[listIndex];
          list.addTodo(todo);
        }

        if (event.target.classList.contains("delete-list")) {
          Storage.lists.splice(listIndex, 1);
          listDisplay.show(Storage.lists);
        }
      }
    });

    todoService.listenForTodoUpdates(listBoard);
    todoService.listenForTodoDelete(listBoard);
  }
}

export default new ListService();