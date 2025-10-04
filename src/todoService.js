import {createTodoElement} from "./todoDisplay.js";
import Storage from "./Storage.js"
import todoFactory from "./todoFactory.js";

class TodoService {
  addTodo(listElement) {
    const todo = todoFactory.createTodo();
    listElement.appendChild(createTodoElement(todo));
    return todo;
  }

  listenForTodoUpdates(listBoard) {
    listBoard.addEventListener("input", event => {
      if (
        event.target.classList.contains("todo-title") || 
        event.target.classList.contains("todo-description") ||
        event.target.classList.contains("is-complete")
      ) {
        const listElement = event.target.closest(".list-card");
        const listId = listElement.id;
        const listIndex = Storage.lists.findIndex(list => list.id === listId);

        const listItem = event.target.closest(".list-item")
        const todoId = listItem.id;
        const todoIndex = Storage.lists[listIndex].todos.findIndex(todo => todo.id === todoId);

        if (event.target.classList.contains("todo-title")) {
          Storage.lists[listIndex].todos[todoIndex].title = event.target.value;
        }

        if (event.target.classList.contains("todo-description")) {
          Storage.lists[listIndex].todos[todoIndex].description = event.target.value;
        }

        if (event.target.classList.contains("is-complete")) {
          console.log("ckytodo checked=", event.target.checked);
          Storage.lists[listIndex].todos[todoIndex].isComplete = event.target.checked;
          console.log(Storage.lists);
        }
      }
    });
  }
}

export default new TodoService();