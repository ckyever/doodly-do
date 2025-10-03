export const createTodoElement = (todo) => {
    const listItem = document.createElement("li");
    listItem.classList = "list-item";

    const todoInput = document.createElement("input");
    todoInput.classList = "todo-title";
    todoInput.id = todo.id;
    todoInput.value = todo.title;

    listItem.appendChild(todoInput);

    return listItem;
};