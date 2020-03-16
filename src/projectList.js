/* eslint-disable no-console */

import Project from './project';

const ProjectList = () => {
  let projectList;

  if (localStorage.projectList) projectList = JSON.parse(localStorage.projectList);
  else projectList = [Project('Default List')];

  const saveList = () => {
    if (typeof (Storage) !== 'undefined') {
      localStorage.projectList = JSON.stringify(projectList);
      return true;
    }
    console.log('ERROR: No web storage support. Using a temporal storage instead');
    return false;
  };

  const addProject = (newProject) => {
    projectList.push(newProject);
    saveList();
  };

  const addTodo = (index, newTodo) => {
    projectList[index].todoList.push(newTodo);
    saveList();
  };

  const delProject = (index) => {
    projectList = projectList.splice(index, 1);
    saveList();
  };

  const delTodo = (indexProject, indexTodo) => {
    projectList[indexProject].todoList.splice(indexTodo, 1);
    saveList();
  };

  return {
    projectList,
    addProject,
    addTodo,
    delProject,
    delTodo,
  };
};

export default ProjectList;
