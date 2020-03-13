/* eslint-disable no-alert */
/* eslint-disable no-console */
import Todo from './todo';
// import TodoList from './todolist';
import Project from './project';

const ProjectList = () => {
  const projectContainer = document.querySelector('#project-list');
  const todoContainer = document.querySelector('#todoList');
  const projectForm = document.getElementById('project-form');
  const projectInput = document.getElementById('project-input');
  const todoForm = document.querySelector('#todo-form');
  const projects = [];
  let currentProject = 0;

  const renderTodos = (number = 0) => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    for (let i = 0; i < projects[number].todos.length; i += 1) {
      const todoElement = document.createElement('li');
      todoElement.className = 'col-12';
      todoElement.id = `todo-${i}`;
      todoElement.innerHTML = `
        <strong>Task: ${projects[number].todos[i].title}</strong><br>
        Due Date: ${projects[number].todos[i].dueDate}<br>
        `;
      const actionDiv = document.createElement('div')
      actionDiv.classList.add('actionButtons')
      const editBtn = document.createElement('button')
      editBtn.textContent = 'Edit Task'
      editBtn.classList.add('btn')
      editBtn.classList.add('btn-info')
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'Delete Task'
      deleteBtn.classList.add('btn')
      deleteBtn.classList.add('btn-danger')


      todoList.appendChild(todoElement);
      todoElement.appendChild(actionDiv)
      actionDiv.appendChild(editBtn)
      actionDiv.appendChild(deleteBtn)

      todoElement.addEventListener('click', () => {
        console.log(`${projects[number].todos[i].title}and ${projects[number].todos[i].description}`);
        todoElement.innerHTML = `
          <strong>Task: ${projects[number].todos[i].title}</strong><br>
          <strong>Description: ${projects[number].todos[i].description}</strong><br>
          <strong>Due Date: ${projects[number].todos[i].dueDate}</strong><br>
          <strong>Priority: ${projects[number].todos[i].priority}</strong><br>
          `;
      });
    }
  };


  const cleanActive = () => {
    for (let i = 0; i < projects.length; i += 1) {
      const currentElement = document.querySelector(`#project-${i}`);
      currentElement.classList.remove('active');
    }
  };

  const renderProjects = () => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    for (let i = 0; i < projects.length; i += 1) {
      const projectElement = document.createElement('li');
      projectElement.id = `project-${i}`;
      // projectElement.id = 'project-item';
      // projectElement.classList.add('project-item');
      projectElement.textContent = projects[i].title;
      // eslint-disable-next-line no-loop-func
      projectElement.addEventListener('click', () => {
        renderTodos(i);
        currentProject = i;
        cleanActive();
        projectElement.classList.add('active');
      });
      projectList.appendChild(projectElement);
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
    // document.getElementById('column-two').appendChild(TodoList(projects[number]));

    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    renderTodos(number);

    console.log(keys);
  };

  // const addTask = () => {
  //   let selectedProject;
  //   projectContainer.addEventListener('click', (e) => {
  //     if (e.target.tagName.toLowerCase() === 'li') {
  //       alert(e.target.id);
  //       console.log(e.target.tasks);
  //       selectedProject = e.target.id;
  //       console.log(e);
  //       // renderTodos(e);

  //       // call function to display form to add task
  //     }
  //   });
  // };

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

  // addTask();

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

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodoFromForm(currentProject);
    renderTodos(currentProject);
  });

  addProject(Project('Default'));
  renderProjects();
  renderTodos(0);
  document.getElementById('project-0').classList.add('active');

  return {
    projects,
    renderProjects,
    renderTodos,
    addProject,
    addTodoFromForm,
  };
};

export default ProjectList;
