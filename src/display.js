/* eslint-disable no-unused-vars */

const Display = (site) => {
  const create = (appendTo, className = '', idName = '', elementType = 'div') => {
    const element = document.createElement(elementType);
    if (className !== '') element.className = className;
    if (idName !== '') element.id = idName;
    if (appendTo != null) appendTo.appendChild(element);
    return element;
  };

  const row = create(site, 'row');

  const column1 = create(row, 'col-md-4', 'column-one');
  const c1Header = create(column1, '', '', 'h1');
  c1Header.textContent = 'Projects';

  const c1Form = create(column1, 'row', 'project-form', 'form');
  const c1Input = create(c1Form, 'form-control col-md-8', 'project-input', 'input');
  c1Input.type = 'text';
  const c1Button = create(c1Form, 'btn btn-primary col-md-4', '', 'button');
  c1Button.textContent = 'Add Project';
  const projectList = create(column1, '', 'project-list', 'ul');

  const column2 = create(row, 'col-md-8', 'column-two');
  const listHeader = create(column2, '', '', 'h1');
  listHeader.textContent = 'Lists';

  const c2Form = create(column2, 'form-group', 'todo-form', 'form');
  const todoTitle = create(c2Form, 'form-control', 'todo-title', 'input');
  todoTitle.placeholder = 'Add Title';
  const todoDesc = create(c2Form, 'form-control', 'todo-desc', 'input');
  todoDesc.placeholder = 'Add description';
  const todoDueDate = create(c2Form, 'form-control', 'todo-date', 'input');
  todoDueDate.type = 'date';
  const select = create(c2Form, 'form-control', 'priority', 'select');
  const optionOne = create(select, '', '', 'option');
  optionOne.value = '1';
  optionOne.textContent = '1';
  const optionTwo = create(select, '', '', 'option');
  optionTwo.value = '2';
  optionTwo.textContent = '2';
  const optionThree = create(select, '', '', 'option');
  optionThree.value = '3';
  optionThree.textContent = '3';
  const taskButton = create(c2Form, 'btn btn-success', '', 'button');
  taskButton.textContent = 'Add New Todo';

  const modal = create(column2, 'modal', 'todo-modal');

  const modalContent = (modal);
  const close = (modal, 'close', '', 'button');

  const todoList = create(column2, 'todo-list', 'todo-list', 'ul');

  return {
    create,
  };
};

export default Display;
