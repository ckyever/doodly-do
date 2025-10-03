import todoFactory from "./todoFactory.js";
import Storage from "./Storage.js"
import {createTodoElement} from "./TodoDisplay.js";

// Create an input element against the given list
// Create a Todo object instance
// Add event listener for input
// Once there is data update respective Todo object with data
// Needs to still update the same one if user updates it

class TodoService {
  addTodo(listElement) {
    const todo = todoFactory.createTodo();
    listElement.appendChild(createTodoElement(todo));
    return todo;
  }

  listenForTodoUpdates(listBoard) {
    listBoard.addEventListener("input", event => {
      if (event.target.classList.contains("todo-text")) {
        const listElement = event.target.closest(".list-card");
        const listId = listElement.id;
        const listIndex = Storage.lists.findIndex(list => list.id === listId);

        const todoId = event.target.id;
        const todoIndex = Storage.lists[listIndex].todos.findIndex(todo => todo.id === todoId);

        Storage.lists[listIndex].todos[todoIndex].text = event.target.value;
      }
    });
  }
}

export default new TodoService();