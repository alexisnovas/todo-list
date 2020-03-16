/* eslint-disable prefer-const */

const Project = (newTitle = 'New Project') => {
  let title = newTitle;
  const todoList = [];
  const creationDate = Date.now();

  return {
    title,
    todoList,
    creationDate,
  };
};

export default Project;
