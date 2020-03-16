/* eslint-disable prefer-const */

const Todo = (newTitle = 'New Task', newDueDate, newPriority = 2, newDescription) => {
  let title = newTitle;
  let dueDate = newDueDate;
  let priority = newPriority;
  let description = newDescription;
  let isCompleted = false;
  const creationDate = Date.now();

  return {
    title,
    dueDate,
    priority,
    description,
    isCompleted,
    creationDate,
  };
};

export default Todo;
