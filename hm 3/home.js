const btn = document.querySelector ('.btn')
  function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const todoList = document.getElementById('todo-list');


            data.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = `${todo.id}: ${todo.title}`;
                todoList.appendChild(li);
            });
        })
        .catch(error => console.error('Произошла ошибка:', error));
}


btn.addEventListener('click', fetchTodos);