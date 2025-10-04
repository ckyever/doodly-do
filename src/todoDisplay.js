export const createTodoElement = (todo) => {
    const listItem = document.createElement("li");
    listItem.classList = "list-item";
    listItem.id = todo.id;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList = "is-complete";
    checkBox.checked = todo.isComplete;
    listItem.appendChild(checkBox);

    const textContainer = document.createElement("div");
    textContainer.classList = "text-container";

    const todoTitle = document.createElement("input");
    todoTitle.classList = "todo-title";
    todoTitle.value = todo.title;
    todoTitle.placeholder = "Title";
    textContainer.appendChild(todoTitle);

    const todoDescription = document.createElement("input");
    todoDescription.classList = "todo-description";
    todoDescription.value = todo.description;
    todoDescription.placeholder = "Description";
    textContainer.appendChild(todoDescription);

    listItem.appendChild(textContainer);

    return listItem;
};