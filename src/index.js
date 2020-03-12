//import display from './display';
import Project from './project';
import './css/style.css'
import Todo from './todo';
import TodoList from './TodoList';



//display.pageSetup();
Project.render();


const todo1 = new Todo("Buy Groceires", "buy more groceries", "12 sep 2022", 2);
const todo2 = new Todo("Buy Cars", "buy more groceries", "12 sep 2022", 2);
const todo3 = new Todo("Buy Books", "buy more groceries", "12 sep 2022", 2);
const todo4 = new Todo("Finish Homework", "buy more groceries", "12 sep 2022", 2);

const defaultProject = new Project();

defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);
defaultProject.addTodo(todo3);
defaultProject.addTodo(todo4);

console.log(defaultProject);
console.log(defaultProject.todos);
console.log(defaultProject.todos[0]);
console.log(defaultProject.todos[1]);

// document.getElementById('columnTwo').appendChild(new TodoList(defaultProject));
