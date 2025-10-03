import {createTodoElement} from "./todoDisplay.js";

export const listDisplay = {
  show(lists) {
    const listBoard = document.querySelector("div.list-board");
    listBoard.innerHTML = ""; // Clear out all current lists first

    lists.forEach(currentList => {
      const listCard = document.createElement("div"); 
      listCard.classList = "list-card";
      listCard.id = currentList.id;

      const listTitle = document.createElement("h2");
      listTitle.classList = "list-title"
      listTitle.textContent = currentList.title;
      listCard.appendChild(listTitle);

      const addTodoButton = document.createElement("button");
      addTodoButton.classList = "add-todo";
      addTodoButton.textContent = "Add a Todo";
      listCard.appendChild(addTodoButton);

      const list = document.createElement("ul");
      list.classList = "list"

      currentList.todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        list.appendChild(todoElement);
      });

      listCard.appendChild(list);
      listBoard.appendChild(listCard);
    });
  }
}