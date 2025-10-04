export default class List {
  constructor(title) {
    this.title = title;
    this.todos = [];
    this.id = crypto.randomUUID();
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo) {
    const index = this.todos.indexOf(todo);

    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }
};