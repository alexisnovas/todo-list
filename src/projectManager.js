/* eslint-disable no-alert */
/* eslint-disable no-console */

import ProjectList from './projectList';
import Project from './project';
import Todo from './todo';

const ProjectManager = () => {
  const projectForm = document.getElementById('project-form');
  const projectInput = document.getElementById('project-input');
  const todoForm = document.querySelector('#todo-form');
  const list = ProjectList();
  let currentProject = 0;

  const changeCurrentProject = (index) => {
    currentProject = index > list.projectList.length ? list.projectList.length : index;
  };

  const renderTodos = (number = 0) => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    for (let i = 0; i < list.projectList[number].todoList.length; i += 1) {
      const todoElement = document.createElement('li');
      todoElement.className = 'col-12';
      todoElement.id = `todo-${i}`;
      todoElement.innerHTML = `
        <strong>Task: ${list.projectList[number].todoList[i].title}</strong><br>
        Due Date: ${list.projectList[number].todoList[i].dueDate}<br>
        `;
      const actionDiv = document.createElement('div');
      actionDiv.classList.add('actionButtons');
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit Task';
      editBtn.classList.add('btn');
      editBtn.classList.add('btn-info');
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete Task';
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('btn-danger');

      todoList.appendChild(todoElement);
      todoElement.appendChild(actionDiv);
      actionDiv.appendChild(editBtn);
      actionDiv.appendChild(deleteBtn);

      todoElement.addEventListener('click', () => {
        todoElement.innerHTML = `
          <strong>Task: ${list.projectList[number].todoList[i].title}</strong><br>
          <strong>Description: ${list.projectList[number].todoList[i].description}</strong><br>
          <strong>Due Date: ${list.projectList[number].todoList[i].dueDate}</strong><br>
          <strong>Priority: ${list.projectList[number].todoList[i].priority}</strong><br>
          `;
      });
    }
  };

  const cleanActive = () => {
    for (let i = 0; i < list.projectList.length; i += 1) {
      const currentElement = document.querySelector(`#project-${i}`);
      currentElement.classList.remove('active');
    }
  };

  const renderProjects = () => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    for (let i = 0; i < list.projectList.length; i += 1) {
      const projectElement = document.createElement('li');
      projectElement.id = `project-${i}`;
      projectElement.textContent = list.projectList[i].title;
      projectElement.addEventListener('click', () => {
        renderTodos(i);
        changeCurrentProject(i);
        cleanActive();
        projectElement.classList.add('active');
      });
      projectList.appendChild(projectElement);
    }
  };

  const addTodoFromForm = (index = 0) => {
    list.addTodo(index, Todo(
      document.getElementById('todo-title').value,
      document.getElementById('todo-desc').value,
      document.getElementById('todo-date').value,
      document.getElementById('priority').value,
    ));

    document.getElementById('todo-list').innerHTML = '';
    renderTodos(index);
  };

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectName = projectInput.value;
    if (projectName == null || projectName === '') return;
    list.addProject(Project(projectName));
    projectInput.value = null;
    renderProjects();
  });

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodoFromForm(currentProject);
    renderTodos(currentProject);
  });

  renderProjects();
  renderTodos(0);
  document.getElementById('project-0').classList.add('active');

  return {
    list,
    currentProject,
    changeCurrentProject,
    renderProjects,
    renderTodos,
    addTodoFromForm,
  };
};

export default ProjectManager;
