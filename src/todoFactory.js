import Todo from "./Todos.js";

class TodoFactory {
  createTodo(text, details) {
    return new Todo(text, details);
  }
}

export default new TodoFactory();