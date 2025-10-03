export const createTodoElement = (todo) => {
    const listItem = document.createElement("li");
    listItem.classList = "list-item";

    const todoTitle = document.createElement("input");
    todoTitle.classList = "todo-title";
    todoTitle.id = todo.id;
    todoTitle.value = todo.title;
    todoTitle.placeholder = "Title";
    listItem.appendChild(todoTitle);

    const todoDescription = document.createElement("input");
    todoDescription.classList = "todo-description";
    todoDescription.value = todo.description;
    todoDescription.placeholder = "Description";
    listItem.appendChild(todoDescription);

    return listItem;
};