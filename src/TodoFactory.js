import Todo from "./todos.js";

class TodoFactory {
  createTodo(text, details) {
    return new Todo(text, details);
  }
}

export default new TodoFactory();