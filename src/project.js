import display from './display';
import Todo from './todo';
import TodoList from './todolist';

const Project = () => {
  display.pageSetup();
  const projectContainer = document.querySelector('#project-list');
  const projectForm = document.getElementById('project-form');
  const projectInput = document.getElementById('project-input');
  const todoForm = document.getElementById('todo-form');
  const todos = [];

  const projects = [{
    id: Date.now().toString(),
    name: 'Microverse',
  }];

  const createList = (name) => ({
    id: Date.now().toString(),
    name,
    tasks: [],
  });

  const clear = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const render = () => {
    // console.log(projects);
    clear(projectContainer);
    projects.forEach((proj) => {
      const projectElement = document.createElement('li');
      projectElement.id = proj.id;
      projectElement.classList.add('project-item');
      projectElement.textContent = proj.name;
      projectContainer.appendChild(projectElement);
    });
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
    const list = createList(projectName);
    projectInput.value = null;
    projects.push(list);
    render();
  });


  const createTask = (title, desc, dueDate, priority) => ({
    id: Date.now().toString(),
    title,
    desc,
    dueDate,
    priority,
  });

  const addTodo = (tasks) => {
    todos.push(tasks);
    // projects.tasks.push(Todo)
  };

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formTitle = document.getElementById('todo-title').value;
    const formDesc = document.getElementById('todo-desc').value;
    const formDueDate = document.getElementById('todo-date').value;
    const formPriority = document.getElementById('priority').value;

    const todoObject = Todo(formTitle, formDesc, formDueDate, formPriority);
    addTodo(todoObject);
    console.log(todos);
  });


  return {
    todos,
    addTodo,
    render,
  };
};


// let item = Project()
// item.todos[0]
export default Project;
