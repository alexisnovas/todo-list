const Display = () => {
  const pageSetup = () => {
    const main = document.getElementById('container');
    const row = document.createElement('div');
    row.classList.add('row');
    main.appendChild(row);

    const columnOne = document.createElement('div');
    columnOne.classList.add('col-md-4');
    columnOne.id = 'column-one';
    row.appendChild(columnOne);

    const projectHeader = document.createElement('h1');
    projectHeader.textContent = 'Projects';
    columnOne.appendChild(projectHeader);

    // add this to a function
    const form = document.createElement('form');
    form.id = 'project-form';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'project-input';
    input.classList.add('form-control');
    const projectButton = document.createElement('button');
    projectButton.classList.add('btn');
    projectButton.classList.add('btn-primary');
    projectButton.textContent = 'Add Project';
    columnOne.appendChild(form);
    form.appendChild(input);
    form.appendChild(projectButton);

    const projectList = document.createElement('ul');
    projectList.id = 'project-list';
    columnOne.appendChild(projectList);

    const columnTwo = document.createElement('div');
    columnTwo.classList.add('col-md-8');
    columnTwo.id = 'column-two';
    row.appendChild(columnTwo);

    const listHeader = document.createElement('h1');
    listHeader.textContent = 'Lists';
    columnTwo.appendChild(listHeader);

    // add this to a function
    const todoForm = document.createElement('form');
    todoForm.classList.add('form-group');
    todoForm.id = 'todo-form';
    const todoTitle = document.createElement('input');
    todoTitle.id = 'todo-title';
    todoTitle.classList.add('form-control');
    todoTitle.placeholder = 'Add Title';
    const todoDesc = document.createElement('input');
    todoDesc.classList.add('form-control');
    todoDesc.placeholder = 'Add description';
    todoDesc.id = 'todo-desc';
    const todoDueDate = document.createElement('input');
    todoDueDate.type = 'date';
    todoDueDate.classList.add('form-control');
    todoDueDate.id = 'todo-date';
    const select = document.createElement('select');
    select.classList.add('form-control');
    select.id = 'priority';
    const optionOne = document.createElement('option');
    optionOne.value = '1';
    optionOne.textContent = '1';
    const optionTwo = document.createElement('option');
    optionTwo.value = '2';
    optionTwo.textContent = '2';
    const optionThree = document.createElement('option');
    optionThree.value = '3';
    optionThree.textContent = '3';
    const taskButton = document.createElement('button');
    taskButton.classList.add('btn');
    taskButton.classList.add('btn-success');
    taskButton.textContent = 'Add New Todo';

    const modal = document.createElement('div')
    modal.id = 'todoModal'
    modal.classList.add('modal')

    const modalContent = document.createElement('div')
    const close = document.createElement('button')
    close.textContent = "Close"
    close.classList.add('close')

    columnTwo.appendChild(todoForm);
    todoForm.appendChild(todoTitle);
    todoForm.appendChild(todoDesc);
    todoForm.appendChild(todoDueDate);
    todoForm.appendChild(select);
    select.appendChild(optionOne);
    select.appendChild(optionTwo);
    select.appendChild(optionThree);
    todoForm.appendChild(taskButton);

    const todoList = document.createElement('ul');
    todoList.classList.add('todo-list');
    todoList.id = 'todo-list';
    columnTwo.appendChild(todoList);
    columnTwo.appendChild(modal)
    modal.appendChild(modalContent)

  };

  return {
    pageSetup,
  };
};

export default Display;
