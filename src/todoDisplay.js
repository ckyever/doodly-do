export const createTodoElement = (todo) => {
    const listItem = document.createElement("li");
    listItem.classList = "list-item";

    const todoInput = document.createElement("input");
    todoInput.classList = "todo-text";
    todoInput.id = todo.id;
    todoInput.value = todo.text;

    listItem.appendChild(todoInput);

    return listItem;
};