const Project = (newTitle = 'New Project') => {
  const id = Date.now().toString();
  let title = newTitle;
  const todos = [];

  const changeTitle = (string) => {
    title = string;
  };

  const addTodo = (tasks) => {
    todos.push(tasks);
    // projects.tasks.push(Todo)
  };

  return {
    id,
    title,
    changeTitle,
    todos,
    addTodo,
  };
};

export default Project;
