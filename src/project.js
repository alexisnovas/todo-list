const Project = (newTitle = 'New Project') => {
  const title = newTitle;
  const todoList = [];
  const creationDate = Date.now();

  return {
    title,
    todoList,
    creationDate,
  };
};

export default Project;
