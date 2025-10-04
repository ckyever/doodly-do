export default class Todo {
  constructor(title = "", details = {}) {
    this.title = title;
    this.description = details.description ?? null;
    this.dueDate = details.dueDate ?? null;
    this.isComplete = false;
    this.id = crypto.randomUUID();
  }

  toggle() {
    this.isComplete = !this.isComplete;
  }
};