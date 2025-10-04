import { createTodoElement } from "./todoDisplay.js";
import Storage from "./Storage.js"
import todoFactory from "./todoFactory.js";
import { listDisplay } from "./listDisplay.js";

class TodoService {
  addTodo(listElement) {
    const todo = todoFactory.createTodo();
    listElement.appendChild(createTodoElement(todo));
    return todo;
  }

  getTodoIndexFromEvent(event) {
    const listElement = event.target.closest(".list-card");
    const listId = listElement.id;
    const listIndex = Storage.lists.findIndex(list => list.id === listId);

    const listItem = event.target.closest(".list-item")
    const todoId = listItem.id;
    const todoIndex = Storage.lists[listIndex].todos.findIndex(todo => todo.id === todoId);

    return { listIndex, todoIndex };
  }

  listenForTodoUpdates(listBoard) {
    listBoard.addEventListener("input", event => {
      if (
        event.target.classList.contains("is-complete") ||
        event.target.classList.contains("todo-title") || 
        event.target.classList.contains("todo-description") ||
        event.target.classList.contains("due-date")
      ) {
        const { listIndex, todoIndex } = this.getTodoIndexFromEvent(event);

        if (event.target.classList.contains("todo-title")) {
          Storage.lists[listIndex].todos[todoIndex].title = event.target.value;
        }

        if (event.target.classList.contains("todo-description")) {
          Storage.lists[listIndex].todos[todoIndex].description = event.target.value;
        }

        if (event.target.classList.contains("is-complete")) {
          Storage.lists[listIndex].todos[todoIndex].isComplete = event.target.checked;
        }

        if (event.target.classList.contains("due-date")) {
          Storage.lists[listIndex].todos[todoIndex].dueDate = event.target.value;
        }
      }
    });
  }

  listenForTodoDelete(listBoard) {
    listBoard.addEventListener("click", event => {
      if (event.target.classList.contains("delete-todo")) {
        const {listIndex, todoIndex} = this.getTodoIndexFromEvent(event);
        Storage.lists[listIndex].todos.splice(todoIndex, 1);
        listDisplay.show(Storage.lists);      
      }
    });
  }
}

export default new TodoService();