// import display from './display';
import Project from './project';
import './css/style.css';
import Todo from './todo';
import TodoList from './TodoList';


// display.pageSetup();
// Project.render();


const todo1 = Todo('Buy Groceires', 'buy more groceries', '12 sep 2022', 2);
const todo2 = Todo('Buy Cars', 'buy more groceries', '12 sep 2022', 2);
const todo3 = Todo('Buy Books', 'buy more groceries', '12 sep 2022', 2);
const todo4 = Todo('Finish Homework', 'buy more groceries', '12 sep 2022', 2);

const defaultProject = Project();

defaultProject.render();

defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);
defaultProject.addTodo(todo3);
defaultProject.addTodo(todo4);

console.log(defaultProject);

document.getElementById('columnTwo').appendChild(TodoList(defaultProject));
