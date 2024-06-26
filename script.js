let todos = [];

function addTodo() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;
    const important = document.getElementById('important').checked;
    const urgent = document.getElementById('urgent').checked;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const progress = document.getElementById('progress').value;

    const priority = calculatePriority(important, urgent);

    const todo = {
        title,
        description,
        author,
        category,
        important,
        urgent,
        priority,
        startDate,
        endDate,
        progress
    };

    todos.push(todo);
    displayTodos();
    clearForm();
}

function calculatePriority(important, urgent) {
    if (important && urgent) return 'Sofort erledigen';
    if (important && !urgent) return 'Einplanen und Wohlfühlen';
    if (!important && urgent) return 'Gib es ab';
    return 'Weg damit';
}

function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';

        todoItem.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <p>Autor: ${todo.author}</p>
            <p>Kategorie: ${todo.category}</p>
            <p>Wichtig: ${todo.important ? 'Ja' : 'Nein'}, Dringend: ${todo.urgent ? 'Ja' : 'Nein'}</p>
            <p>Priorität: ${todo.priority}</p>
            <p>Startdatum: ${todo.startDate}</p>
            <p>Enddatum: ${todo.endDate}</p>
            <p>Fortschritt: ${todo.progress}%</p>
            <button onclick="deleteTodo(${index})">Löschen</button>
        `;

        todoList.appendChild(todoItem);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('author').value = '';
    document.getElementById('category').value = 'Sport';
    document.getElementById('important').checked = false;
    document.getElementById('urgent').checked = false;
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('progress').value = '';
}

function searchTodos() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchQuery));
    
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    filteredTodos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';

        todoItem.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <p>Autor: ${todo.author}</p>
            <p>Kategorie: ${todo.category}</p>
            <p>Wichtig: ${todo.important ? 'Ja' : 'Nein'}, Dringend: ${todo.urgent ? 'Ja' : 'Nein'}</p>
            <p>Priorität: ${todo.priority}</p>
            <p>Startdatum: ${todo.startDate}</p>
            <p>Enddatum: ${todo.endDate}</p>
            <p>Fortschritt: ${todo.progress}%</p>
            <button onclick="deleteTodo(${index})">Löschen</button>
        `;

        todoList.appendChild(todoItem);
    });
}
