import display from './display';

const project = (() => {
  display.pageSetup();
  const projectContainer = document.querySelector('#project-list');
  const projectForm = document.getElementById('project-form');
  const projectInput = document.getElementById('project-input');

  const projects = [{
    id: Date.now().toString(),
    name: 'Microverse',
    tasks: [],
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
    //console.log(projects);
    clear(projectContainer);
    projects.forEach((proj) => {
      const projectElement = document.createElement('li');
      projectElement.id = proj.id;
      projectElement.classList.add('project-item');
      projectElement.textContent = proj.name;
      projectContainer.appendChild(projectElement);
    });
  };

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectName = projectInput.value;
    if (projectName == null || projectName === '') return;
    const list = createList(projectName);
    projectInput.value = null;
    projects.push(list);
    render();
  });

  projectContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      alert(e.target.id);
    }
  });


  return {
    render,
  };
})();

export default project;
