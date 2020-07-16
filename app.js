    // Selectors
    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-btn');
    const todoList = document.querySelector('.todo-list');
    const filterOption = document.querySelector('.filter-todo');

    // Event Listeners
    todoButton.addEventListener('click', function (event) {
        if (event.target.value.trim() !== "") {
            addTodo();
        } else {
            alert("Please write your task!");
        }
    });

    todoInput.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            if (event.target.value.trim() !== "") {
                addTodo();
            } else {
                alert("Please write your task!");
            }
        }
    });

    todoList.addEventListener('click', deleteCheck);

    filterOption.addEventListener('click', filterTodo);


    // Functions
    function addTodo() {

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

    function deleteCheck(e) {
        const item = e.target;

        // Delete Todo
        if (item.classList[0] === "trash-btn") {
            const todo = item.parentElement;
            // Animation
            todo.classList.add('fall');

            todo.addEventListener('transitionend', function () {
                todo.remove();
            })
        }

        // Check Mark
        if (item.classList[0] === "check-btn") {
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }
    }

    function filterTodo(e) {
        const todos = todoList.childNodes;

        todos.forEach(function (todo) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        })
    }