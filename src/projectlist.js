import display from './display';
import Todo from './todo';
import TodoList from './todolist';
import Project from './project';

const ProjectList = () => {
  display.pageSetup();
  const projectContainer = document.querySelector('#project-list');
  const projectForm = document.getElementById('project-form');
  const projectInput = document.getElementById('project-input');
  const todoForm = document.getElementById('todo-form');
  const projects = [];

  const clear = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const render = () => {
    clear(projectContainer);
    for (let i = 0; i < projects.length; i += 1) {
      const projectElement = document.createElement('li');
      projectElement.id = projects[i].id;
      projectElement.classList.add('project-item');
      projectElement.textContent = projects[i].title;
      projectContainer.appendChild(projectElement);
    }
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
    render();
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
  };

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formTitle = document.getElementById('todo-title').value;
    const formDesc = document.getElementById('todo-desc').value;
    const formDueDate = document.getElementById('todo-date').value;
    const formPriority = document.getElementById('priority').value;

    const todoObject = Todo(formTitle, formDesc, formDueDate, formPriority);
    projects[0].addTodo(todoObject);
    console.log(projects[0].todos);
    // document.getElementById('columnTwo').innerHTML = '';
    document.getElementById('columnTwo').appendChild(TodoList(projects[0]));
  });

  return {

    projects,
    render,
    addProject,
  };
};

export default ProjectList;
