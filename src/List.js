export default class List {
  #todos;

  constructor(title) {
    this.title = title;
    this.#todos = [];
  }

  addTodo(todo) {
    this.#todos.append(todo);
  }

  deleteTodo(todo) {
    const index = this.#todos.indexOf(todo);

    if (index >= 0) {
      this.#todos.splice(index, 1);
    }
  }
};