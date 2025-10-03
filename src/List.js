export default class List {
  #todos;
  #id;

  constructor(title) {
    this.title = title;
    this.#todos = [];
    this.#id = crypto.randomUUID();
  }

  get id() {
    return this.#id;
  }

  get todos() {
    return this.#todos;
  }

  addTodo(todo) {
    this.#todos.push(todo);
  }

  deleteTodo(todo) {
    const index = this.#todos.indexOf(todo);

    if (index >= 0) {
      this.#todos.splice(index, 1);
    }
  }
};