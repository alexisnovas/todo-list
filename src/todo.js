/* eslint-disable prefer-const */

const Todo = (newTitle = 'New Task', newDescription, newDueDate, newPriority = 2) => {
  let title = newTitle;
  let description = newDescription;
  let dueDate = newDueDate;
  let priority = newPriority;
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
