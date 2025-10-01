export default class Todo {
  constructor(title, description, dueDate, note) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.note = note;
    this.isComplete = false;
  }
};