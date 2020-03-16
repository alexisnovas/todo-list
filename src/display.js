/* eslint-disable no-unused-vars */
import Create from './create';

const Display = (site) => {
  const row1 = Create(site, 'row');
  const row2 = Create(site, 'row');

  const columnLeft1 = Create(row1, 'col-md-5');
  const c1Header = Create(columnLeft1, 'row', '', 'h1');
  c1Header.textContent = 'Projects';
  const c1Form = Create(columnLeft1, 'row border', 'project-form', 'form');
  const c1Input = Create(c1Form, 'form-control col-md-8', 'project-input', 'input');
  const c1Button = Create(c1Form, 'btn btn-primary col-md-4', '', 'button');
  c1Input.type = 'text';
  c1Input.placeholder = 'New Project';
  c1Button.textContent = 'Add Project';

  const columnRight1 = Create(row1, 'col-md-7');
  const c2Form = Create(columnRight1, 'form-group row', 'todo-form', 'form');
  const todoTitle = Create(c2Form, 'form-control col-md-6', 'todo-title', 'input');
  const todoDueDate = Create(c2Form, 'form-control col-md-4', 'todo-date', 'input');
  const select = Create(c2Form, 'form-control col-md-2', 'priority', 'select');
  const todoDesc = Create(c2Form, 'form-control pt-0 pb-0', 'todo-desc', 'textarea');
  const taskButton = Create(c2Form, 'btn btn-success offset-md-8 col-md-4 align-self-end p-0', '', 'button');
  const optionOne = Create(select, '', '', 'option');
  const optionTwo = Create(select, '', '', 'option');
  const optionThree = Create(select, '', '', 'option');
  todoTitle.placeholder = 'Add Title';
  todoTitle.setAttribute('name', 'title');
  todoDesc.placeholder = 'Add description';
  todoDueDate.type = 'date';
  optionOne.value = '1';
  optionOne.textContent = '1';
  optionTwo.value = '2';
  optionTwo.textContent = '2';
  optionThree.value = '3';
  optionThree.textContent = '3';
  taskButton.textContent = 'Add New Todo';


  const columnLeft2 = Create(row2, 'col-md-5');
  const projectList = Create(columnLeft2, 'row list-group', 'project-list', 'ul');

  const columnRight2 = Create(row2, 'col-md-7');
  const todoList = Create(columnRight2, 'row todo-list list-group', 'todo-list', 'ul');

  // const modal = Create(column2, 'modal row', 'todo-modal');

  // const modalContent = (modal);
  // const close = (modal, 'close', '', 'button');


  return {
    create: Create,
  };
};

export default Display;
