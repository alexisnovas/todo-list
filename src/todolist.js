const TodoList = ((Project) => {
  const base = document.createElement('div');
  base.className = "col-12";
  base.id = 'TodoList';

  // for (let i = 0; i < Project.todos.length; i += 1) {
  //   const todoElement = document.createElement('div');
  //   todoElement.className = "col-12";
  //   todoElement.id = Project.todos[i].creationDate;
  //   todoElement.innerHTML = `
  //     Task: ${Project.todos[i].title}<br>
  //     Description: ${Project.todos[i].description}<br>
  //     Due Date: ${Project.todos[i].dueDate}<br>
  //     Priority: ${Project.todos[i].priority}<br>
  //     `;

  //     base.appendChild(todoElement);
  // }

  return base;
})();

export default TodoList
