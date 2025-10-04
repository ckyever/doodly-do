import List from "./List.js";
import { listDisplay } from "./listDisplay.js";
import Storage from "./Storage.js"
import todoService from "./todoService.js";

class ListService {
  initialise() {
    Storage.load();
    listDisplay.show();
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
      listDisplay.show();
      Storage.save();
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
          const todoInputs = listElement.querySelectorAll(".todo-title");
          todoInputs[todoInputs.length - 1].focus();
        }

        if (event.target.classList.contains("delete-list")) {
          Storage.lists.splice(listIndex, 1);
          listDisplay.show();
        }

        Storage.save();
      }
    });

    listBoard.addEventListener("focusout", event => {
      const listItem = event.target.closest(".list-item");
      const nextFocus = event.relatedTarget;
      if (listItem && (!nextFocus || !listItem.contains(nextFocus))) {
        listItem.classList.remove("expanded");
      }
    });

    listBoard.addEventListener("focusin", event => {
      if (
        event.target.classList.contains("todo-title") ||
        event.target.classList.contains("due-date")
      ) {
        const listItem = event.target.closest(".list-item");
        if (listItem) {
          listItem.classList.add("expanded");
        }
      }
    });

    todoService.listenForTodoUpdates(listBoard);
    todoService.listenForTodoButtons(listBoard);
  }
}

export default new ListService();