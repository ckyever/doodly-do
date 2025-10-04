import Todo from "./Todo.js"
import List from "./List.js"

export default class Storage {
  static lists = [];
  static localStorageKey = "todoLists";

  static load() {
    const data = localStorage.getItem(this.localStorageKey);
    if (data) {
      this.lists = JSON.parse(data);

      // Assign prototypes again
      this.lists.forEach(list => {
        Object.setPrototypeOf(list, List.prototype);
        if (list.todos) {
          list.todos.forEach(todo => {
            Object.setPrototypeOf(todo, Todo.prototype);
          });
        }
      });
    }
  }

  static save() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.lists));
  }
}