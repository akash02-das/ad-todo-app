// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


// Event Listeners
todoButton.addEventListener('click', addTodo);


// Functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    // Checked Mark Button
    const checkedBtn = document.createElement('button');
    checkedBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    checkedBtn.classList.add("check-btn");

    todoDiv.appendChild(checkedBtn);

    // Trash Button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashBtn.classList.add("trash-btn");

    todoDiv.appendChild(trashBtn);

    // Append to list
    todoList.appendChild(todoDiv);

    // Clear Todo Input Value
    todoInput.value = "";
}