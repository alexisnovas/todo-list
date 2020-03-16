const Todo = (newTitle = 'New Task', newDescription, newDueDate, newPriority = 2) => {
  const title = newTitle;
  const description = newDescription;
  const dueDate = newDueDate;
  const priority = newPriority;
  const creationDate = Date.now();

  return {
    title,
    description,
    dueDate,
    priority,
    creationDate,
  };
};

export default Todo;
