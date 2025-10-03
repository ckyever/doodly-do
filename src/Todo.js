export default class Todo {
  #id;

  constructor(title = "", details = {}) {
    this.title = title;
    this.dueDate = details.dueDate ?? null;
    this.isComplete = false;
    this.#id = crypto.randomUUID();
  }

  toggle() {
    this.isComplete = !this.isComplete;
  }

  get id() {
    return this.#id;
  }

};