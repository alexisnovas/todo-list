const Project = (title0 = 'New Project') => {
  let title = title0;
  const todos = [];
  const creationDate = Date.now();

  const changeTitle = (title1) => {
    title = title1;
  };

  const addTodo = (Todo) => {
    todos.push(Todo);
  };

  const remTodo = (number) => {
    todos.splice(number, 1);
  };

  return {
    title,
    todos,
    creationDate,
    changeTitle,
    addTodo,
    remTodo,
  };
};

export default Project;
