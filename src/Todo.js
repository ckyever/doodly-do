export default class Todo {
  #id;

  constructor(text = "", details = {}) {
    this.text = text;
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