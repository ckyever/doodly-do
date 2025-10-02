import todoFactory from "./todoFactory.js"; 
import List from "./List.js"

class TodoService {
  constructor() {
    this.todoLists = [];
  }

  createList(title) {
    const newList = new List(title);
    this.todoLists.push(newList);
  }
}