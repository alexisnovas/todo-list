/* eslint-disable prefer-const */

const Todo = (newTitle = 'New Task', newDueDate, newPriority = 2, newDescription) => {
  let title = newTitle;
  let dueDate = newDueDate;
  let priority = newPriority;
  let description = newDescription;
  const creationDate = Date.now();

  return {
    title,
    dueDate,
    priority,
    description,
    creationDate,
  };
};

export default Todo;
