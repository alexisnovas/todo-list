/* eslint-disable prefer-destructuring */
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
    if (index !== 0) projectList.splice(index, 1);
    saveList();
  };

  const delTodo = (indexProject, indexTodo) => {
    projectList[indexProject].todoList.splice(indexTodo, 1);
    saveList();
  };

  const switchCompleted = (indexProject, indexTodo) => {
    const todo = projectList[indexProject].todoList[indexTodo];
    if (todo.isCompleted === true) todo.isCompleted = false;
    else todo.isCompleted = true;
    saveList();
  };

  const changeTodo = (indexProject, indexTodo, array) => {
    projectList[indexProject].todoList[indexTodo].title = array[0];
    projectList[indexProject].todoList[indexTodo].dueDate = array[1];
    projectList[indexProject].todoList[indexTodo].priority = array[2];
    projectList[indexProject].todoList[indexTodo].description = array[3];
    saveList();
  };

  return {
    projectList,
    addProject,
    addTodo,
    delProject,
    delTodo,
    switchCompleted,
    changeTodo,
  };
};

export default ProjectList;
