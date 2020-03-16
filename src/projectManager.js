/* eslint-disable no-loop-func */
/* eslint-disable no-alert */
/* eslint-disable no-console */

import ProjectList from './projectList';
import Project from './project';
import Todo from './todo';
import Create from './create';

const ProjectManager = () => {
  const list = ProjectList();
  let currentProject = 0;

  const cleanActive = () => {
    for (let i = 0; i < list.projectList.length; i += 1) {
      const currentElement = document.getElementById(`project-${i}`);
      currentElement.classList.remove('active');
    }
  };

  const renderTodos = (index = 0) => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    for (let i = 0; i < list.projectList[index].todoList.length; i += 1) {
      const todoElement = Create(todoList, 'list-group-item', `todo-${i}`, 'li');
      const todoRow = Create(todoElement, 'row', `todo-${i}`, 'li');
      const todoLeft = Create(todoRow, 'col-md-8');
      const todoRight = Create(todoRow, 'col-md-4 row justify');
      const editBtn = Create(todoRight, 'col-6 btn btn-info', '', 'button');
      const deleteBtn = Create(todoRight, 'col-6 btn btn-danger', '', 'button');
      todoLeft.innerHTML = `
      <strong>Task: ${list.projectList[index].todoList[i].title}</strong><br>
        Due Date: ${list.projectList[index].todoList[i].dueDate}<br>
        `;
      todoRight.classList.add('actionButtons');
      editBtn.textContent = 'Edit';
      deleteBtn.textContent = 'Delete';

      // todoElement.addEventListener('click', () => {
      //   todoElement.innerHTML = `
      //     <strong>Task: ${list.projectList[index].todoList[i].title}</strong><br>
      //     <strong>Description: ${list.projectList[index].todoList[i].description}</strong><br>
      //     <strong>Due Date: ${list.projectList[index].todoList[i].dueDate}</strong><br>
      //     <strong>Priority: ${list.projectList[index].todoList[i].priority}</strong><br>
      //     `;
      // });

      deleteBtn.addEventListener('click', () => {
        list.delTodo(currentProject, i);
        renderTodos(currentProject);
      });
    }
  };

  const renderProjects = (index = 0) => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    for (let i = 0; i < list.projectList.length; i += 1) {
      const projectElement = Create(projectList, 'list-group-item', `project-${i}`, 'li');
      projectElement.textContent = list.projectList[i].title;
      projectElement.addEventListener('click', () => {
        renderTodos(i);
        currentProject = i;
        cleanActive();
        projectElement.classList.add('active');
      });
    }

    cleanActive();
    currentProject = index;
    document.getElementById(`project-${index}`).classList.add('Active');
  };

  document.getElementById('project-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newProject = document.forms['project-form'][0];

    if (newProject.value !== '') {
      list.addProject(Project(newProject.value));
      newProject.value = null;
      renderProjects(list.projectList.length - 1);
    }
  });

  document.getElementById('todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    list.addTodo(currentProject, Todo(
      document.forms['todo-form'][0].value,
      document.forms['todo-form'][1].value,
      document.forms['todo-form'][2].value,
      document.forms['todo-form'][3].value,
    ));
    renderTodos(currentProject);
  });

  renderProjects();
  renderTodos(0);
  document.getElementById('project-0').classList.add('active');
};

export default ProjectManager;
