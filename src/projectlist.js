/* eslint-disable no-alert */
/* eslint-disable no-console */
import Todo from './todo';
import TodoList from './todolist';
import Project from './project';

const ProjectList = () => {
  const projectContainer = document.querySelector('#project-list');
  const todoContainer = document.querySelector('#todoList');
  const projectForm = document.getElementById('project-form');
  const projectInput = document.getElementById('project-input');
  const todoForm = document.querySelector('#todo-form');
  const projects = [];

  const clear = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const renderProjects = () => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    for (let i = 0; i < projects.length; i += 1) {
      const projectElement = document.createElement('li');
      projectElement.id = `project-${i}`;
      projectElement.classList.add('project-item');
      projectElement.textContent = projects[i].title;
      projectList.appendChild(projectElement);
    }
  };

  const renderTodos = (number = 0) => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    for (let i = 0; i < projects[number].todos.length; i += 1) {
      const todoElement = document.createElement('li');
      todoElement.className = 'col-12';
      todoElement.id = `todo-${i}`;
      todoElement.innerHTML = `
        Task: ${projects[number].todos[i].title}<br>
        Description: ${projects[number].todos[i].description}<br>
        Due Date: ${projects[number].todos[i].dueDate}<br>
        Priority: ${projects[number].todos[i].priority}<br>
        `;

      todoList.appendChild(todoElement);
    }
  };

  const addTodoFromForm = (number = 0) => {
    const formTitle = document.getElementById('todo-title').value;
    const formDesc = document.getElementById('todo-desc').value;
    const formDueDate = document.getElementById('todo-date').value;
    const formPriority = document.getElementById('priority').value;

    const todoObject = Todo(formTitle, formDesc, formDueDate, formPriority);
    projects[number].addTodo(todoObject);
    const keys = Object.values(todoObject);
    clear(todoContainer);
    document.getElementById('column-two').appendChild(TodoList(projects[number]));


    console.log(keys);
  };

  const addTask = () => {
    let selectedProject;
    projectContainer.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'li') {
        alert(e.target.id);
        console.log(e.target.tasks);
        selectedProject = e.target.id;


        // call function to display form to add task
      }
    });
  };

  addTask();

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectName = projectInput.value;
    if (projectName == null || projectName === '') return;
    // const list = createList(projectName);
    const newProject = Project(projectName);
    projectInput.value = null;
    projects.push(newProject);
    renderProjects();
  });

  const createTask = (title, desc, dueDate, priority) => ({
    id: Date.now().toString(),
    title,
    desc,
    dueDate,
    priority,
  });

  const addProject = (Obj) => {
    projects.push(Obj);
    renderProjects();
  };

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodoFromForm(0);
  });

  addProject(Project('Default'));
  renderProjects();
  renderTodos(0);

  return {
    projects,
    renderProjects,
    renderTodos,
    addProject,
    addTodoFromForm,
  };
};

export default ProjectList;
