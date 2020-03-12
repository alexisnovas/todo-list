const Todo = (newTitle = 'New Task', newDesc, newDueDate, newPriority = 2) => {
  let title = newTitle;
  let description = newDesc;
  let dueDate = newDueDate;
  let priority = newPriority;
  const creationDate = Date.now();

  const validateName = (string) => {
    if (string == null) {
      return false;
    }

    return true;
  };

  const validateDueDate = (Date) => {
    if (Date <= creationDate) {
      return false;
    }

    return true;
  };

  const changeTitle = (string) => {
    if (validateName) {
      title = string;
    }
  };

  const changeDescription = (string) => {
    description = string;
  };

  const changeDueDate = (string) => {
    if (validateDueDate) {
      dueDate = string;
    }

    // eslint-disable-next-line no-console
    console.log('ERROR: The due date cannot be before the creation date of the task');
  };

  const changePriority = (number) => {
    priority = number;
  };

  return {
    title,
    description,
    dueDate,
    priority,
    creationDate,
    changeTitle,
    changeDescription,
    changeDueDate,
    changePriority,
  };
};

export default Todo;
