const display = (() => {
  const pageSetup = () => {
    const main = document.getElementById('main');
    const container = document.createElement('div');
    container.classList.add('container');
    const row = document.createElement('div');
    row.classList.add('row');

    const columnOne = document.createElement('div');
    columnOne.classList.add('col-6');
    columnOne.id = 'columnOne';
    const projectHeader = document.createElement('h1');
    projectHeader.textContent = 'Projects';


    const form = document.createElement('form');
    form.id = 'project-form';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'project-input';
    input.classList.add('form-control');

    const projectButton = document.createElement('button');
    projectButton.classList.add('btn');
    projectButton.classList.add('btn-primary');
    projectButton.textContent = 'Add Project';

    const projectTab = document.createElement('div');
    const projectList = document.createElement('ul');
    projectList.id = 'project-list';

    const columnTwo = document.createElement('div');
    columnTwo.classList.add('col-6');
    columnTwo.id = 'columnTwo';
    const listHeader = document.createElement('h1');
    listHeader.textContent = 'Lists';
    const listTab = document.createElement('div');
    const list = document.createElement('ul');
    const listItem = document.createElement('li');


    main.appendChild(container);
    container.appendChild(row);

    row.appendChild(columnOne);
    columnOne.appendChild(projectHeader);
    // projectHeader.appendChild(projectButton);
    projectHeader.appendChild(form);
    form.appendChild(input);
    form.appendChild(projectButton);


    projectHeader.appendChild(projectTab);
    projectTab.appendChild(projectList);


    row.appendChild(columnTwo);
    columnTwo.appendChild(listHeader);
    listHeader.appendChild(listTab);
    listTab.appendChild(list);
    list.appendChild(listItem);


    console.log(main);
  };

  return {
    pageSetup,
  };
})();

export default display;
