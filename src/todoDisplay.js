import deleteIcon from "./assets/delete.svg";
import { format as formatDate } from "date-fns";

export const createTodoElement = (todo) => {
    const listItem = document.createElement("li");
    listItem.classList = "list-item";
    listItem.id = todo.id;

    const expandButton = document.createElement("button");
    expandButton.type = "button";
    expandButton.classList = "expand-todo";
    listItem.appendChild(expandButton);

    // We use a label to ensure the icon will toggle the checkbox
    const checkBoxContainer = document.createElement("label");
    checkBoxContainer.classList = "checkbox-container";
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList = "is-complete";
    checkBox.checked = todo.isComplete;
    const checkBoxImage = document.createElement("span");
    checkBoxImage.classList = "icon checkbox-icon";
    checkBoxContainer.appendChild(checkBox);
    checkBoxContainer.appendChild(checkBoxImage);
    listItem.appendChild(checkBoxContainer);

    const textContainer = document.createElement("div");
    textContainer.classList = "text-container";

    const todoTitle = document.createElement("input");
    todoTitle.classList = "todo-title";
    todoTitle.value = todo.title;
    todoTitle.placeholder = "Title";
    todoTitle.focus();
    textContainer.appendChild(todoTitle);

    const todoDescription = document.createElement("input");
    todoDescription.classList = "todo-description";
    todoDescription.value = todo.description;
    todoDescription.placeholder = "Description";
    textContainer.appendChild(todoDescription);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.classList = "due-date-label";
    dueDateLabel.textContent = "Due Date";
    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.classList = "due-date";
    dueDate.value = todo.dueDate ?? formatDate(new Date(), "yyyy-MM-dd");
    dueDateLabel.appendChild(dueDate);
    textContainer.appendChild(dueDateLabel);

    listItem.appendChild(textContainer);

    const deleteTodo = document.createElement("button");
    deleteTodo.type = "button";
    deleteTodo.classList = "delete-todo";
    const deleteImage = document.createElement("img");
    deleteImage.classList = "delete-todo icon";
    deleteImage.src = deleteIcon;
    deleteTodo.appendChild(deleteImage);

    listItem.append(deleteTodo);

    return listItem;
};