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
      if (event.target.classList.contains("todo-title")) {
        const listElement = event.target.closest(".list-card");
        const listId = listElement.id;
        const listIndex = Storage.lists.findIndex(list => list.id === listId);

        const todoId = event.target.id;
        const todoIndex = Storage.lists[listIndex].todos.findIndex(todo => todo.id === todoId);

        Storage.lists[listIndex].todos[todoIndex].title = event.target.value;
      }
    });
  }
}

export default new TodoService();