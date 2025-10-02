export default class Todo {
  constructor(text, details = {}) {
    this.text = text;
    this.dueDate = details.dueDate ?? null;
    this.isComplete = false;
  }

  toggle() {
    this.isComplete = !this.isComplete;
  }
};