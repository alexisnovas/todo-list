const display = (() => {
  const pageSetup = () => {
    const main = document.getElementById('main');
    const container = document.createElement('div');
    container.classList.add('container');
    const row = document.createElement('div');
    row.classList.add('row');

    const columnOne = document.createElement('div');
    columnOne.classList.add('col-6');
    columnOne.id = 'columnOne';
    const projectHeader = document.createElement('h1');
    projectHeader.textContent = 'Projects';


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

    const projectTab = document.createElement('div');
    const projectList = document.createElement('ul');
    projectList.id = 'project-list';

    const columnTwo = document.createElement('div');
    columnTwo.classList.add('col-6');
    columnTwo.id = 'columnTwo';
    const listHeader = document.createElement('h1');
    listHeader.textContent = 'Lists';

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
    taskButton.classList.add('btn-primary');
    taskButton.textContent = 'Add New Todo';

    const listTab = document.createElement('div');
    const list = document.createElement('ul');
    list.id = 'TodoList';


    main.appendChild(container);
    container.appendChild(row);

    row.appendChild(columnOne);
    columnOne.appendChild(projectHeader);
    // projectHeader.appendChild(projectButton);
    projectHeader.appendChild(form);
    form.appendChild(input);
    form.appendChild(projectButton);


    projectHeader.appendChild(projectTab);
    projectTab.appendChild(projectList);


    row.appendChild(columnTwo);
    columnTwo.appendChild(listHeader);
    listHeader.appendChild(todoForm);
    todoForm.appendChild(todoTitle);
    todoForm.appendChild(todoDesc);
    todoForm.appendChild(todoDueDate);
    todoForm.appendChild(select);
    select.appendChild(optionOne);
    select.appendChild(optionTwo);
    select.appendChild(optionThree);
    todoForm.appendChild(taskButton);
    columnTwo.appendChild(listTab);
    listTab.appendChild(list);


    console.log(main);
  };

  return {
    pageSetup,
  };
})();

export default display;
