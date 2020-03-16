/* eslint-disable no-unused-vars */
import Create from './create';

const Display = (site) => {
  const row = Create(site, 'row');

  const column1 = Create(row, 'col-md-5', 'column-one');
  const c1Header = Create(column1, 'row', '', 'h1');
  c1Header.textContent = 'Projects';

  const c1Form = Create(column1, 'row border', 'project-form', 'form');
  const c1Input = Create(c1Form, 'form-control col-md-8', 'project-input', 'input');
  const c1Button = Create(c1Form, 'btn btn-primary col-md-4', '', 'button');
  c1Input.type = 'text';
  c1Input.placeholder = 'New Project';
  c1Button.textContent = 'Add Project';

  const projectList = Create(column1, 'row border list-group', 'project-list', 'ul');

  const column2 = Create(row, 'col-md-7', 'column-two');
  const listHeader = Create(column2, 'row', '', 'h1');
  listHeader.textContent = 'Lists';

  const c2Form = Create(column2, 'form-group row border', 'todo-form', 'form');
  const todoTitle = Create(c2Form, 'form-control col-md-6', 'todo-title', 'input');
  const todoDueDate = Create(c2Form, 'form-control col-md-4', 'todo-date', 'input');
  const select = Create(c2Form, 'form-control col-md-2', 'priority', 'select');
  const todoDesc = Create(c2Form, 'form-control', 'todo-desc', 'textarea');
  const taskButton = Create(c2Form, 'btn btn-success offset-md-8 col-md-4', '', 'button');
  const optionOne = Create(select, '', '', 'option');
  const optionTwo = Create(select, '', '', 'option');
  const optionThree = Create(select, '', '', 'option');
  todoTitle.placeholder = 'Add Title';
  todoDesc.placeholder = 'Add description';
  todoDueDate.type = 'date';
  optionOne.value = '1';
  optionOne.textContent = '1';
  optionTwo.value = '2';
  optionTwo.textContent = '2';
  optionThree.value = '3';
  optionThree.textContent = '3';
  taskButton.textContent = 'Add New Todo';

  const modal = Create(column2, 'modal row', 'todo-modal');

  const modalContent = (modal);
  const close = (modal, 'close', '', 'button');

  const todoList = Create(column2, 'todo-list row list-group', 'todo-list', 'ul');

  return {
    create: Create,
  };
};

export default Display;
