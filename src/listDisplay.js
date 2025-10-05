import addTodoIcon from "./assets/add-todo.svg";
import { createTodoElement } from "./todoDisplay.js";
import deleteListIcon from "./assets/delete-list.svg";
import Storage from "./Storage.js";

export const listDisplay = {
  show() {
    const listBoard = document.querySelector("div.list-board");
    listBoard.innerHTML = ""; // Clear out all current lists first

    Storage.lists.forEach(currentList => {
      const listCard = document.createElement("div"); 
      listCard.classList = "list-card";
      listCard.id = currentList.id;

      const titleHeader = document.createElement("div");
      titleHeader.classList = "list-header";

      const listTitle = document.createElement("h2");
      listTitle.classList = "list-title";
      listTitle.textContent = currentList.title;
      titleHeader.appendChild(listTitle);

      const deleteList = document.createElement("button");
      deleteList.classList = "delete-list";
      const deleteImage = document.createElement("img");
      deleteImage.classList = "delete-list icon";
      deleteImage.src = deleteListIcon;
      deleteList.appendChild(deleteImage);
      titleHeader.appendChild(deleteList);

      listCard.appendChild(titleHeader);

      const addTodoButton = document.createElement("button");
      addTodoButton.type = "button";
      addTodoButton.classList = "add-todo";
      const addTodoImage = document.createElement("img");
      addTodoImage.classList = "add-todo icon";
      addTodoImage.src = addTodoIcon;
      addTodoButton.appendChild(addTodoImage);
      const buttonText = document.createTextNode("Doodle a Do");
      addTodoButton.appendChild(buttonText);
      listCard.appendChild(addTodoButton);

      const list = document.createElement("ul");
      list.classList = "list"

      if (currentList.todos) {
        currentList.todos.forEach(todo => {
          const todoElement = createTodoElement(todo);
          list.appendChild(todoElement);
        });
      }

      listCard.appendChild(list);
      listBoard.appendChild(listCard);
    });
  }
}