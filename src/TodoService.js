import todoFactory from "./todoFactory.js";
import Storage from "./Storage.js"

// Create an input element against the given list
// Create a Todo object instance
// Add event listener for input
// Once there is data update respective Todo object with data
// Needs to still update the same one if user updates it

class TodoService {
  addTodo(listElement) {
    const todo = todoFactory.createTodo();
    const todoInput = document.createElement("input");
    todoInput.classList = "todo-text";
    todoInput.id = todo.id;
    listElement.appendChild(todoInput);
    return todo;
  }

  listenForTodoUpdates(listBoard) {
    listBoard.addEventListener("input", event => {
      if (event.target.classList.contains("todo-text")) {
        const todoId = event.target.id;
        const listId = event.target.parentElement.id;
        console.log(`Updating todoId=${todoId} against listId=${listId}`);
      }
    });
  }
}

export default new TodoService();