const addTodo = document.querySelector('.add');
const list = document.querySelector('ul');
const search = document.querySelector('.form-control');

//ADD TODOS
const generateTemplate = todo => {
  const html = `<li class="item">
          <span>${todo}</span>
          <span class="delete">&times;</span>
        </li>`;

  list.innerHTML += html;
};

addTodo?.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addTodo.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addTodo.reset();
  }
});

//DELETE TODOS

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const filterTodos = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => {
      todo.classList.add('filtered');
    });
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => {
      todo.classList.remove('filtered');
    });
};

//SEARCH TODOS

search?.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
