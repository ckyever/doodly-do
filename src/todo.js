export default class Todo {
  constructor(text, dueDate) {
    this.text = text;
    this.dueDate = dueDate;
    this.isComplete = false;
  }

  toggle() {
    this.isComplete = !this.isComplete;
  }
};