// import display from './display';
import Project from './project';
import './css/style.css';
import Todo from './todo';
import TodoList from './todolist';


// display.pageSetup();
// Project.render();
const defaultProject = Project();
defaultProject.render();

/*const todo1 = Todo('1,Buy Groceires', 'buy more groceries', '12 sep 2022', 2);
const todo2 = Todo('2,Buy Cars', 'buy more groceries', '12 sep 2022', 2);
const todo3 = Todo('3,Buy Books', 'buy more groceries', '12 sep 2022', 2);
const todo4 = Todo('5, Finish Homework', 'buy more groceries', '12 sep 2022', 2);

const defaultProject = Project();

defaultProject.render();

defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);
defaultProject.addTodo(todo3);
defaultProject.addTodo(todo4);*/

//console.log(defaultProject);

document.getElementById('columnTwo').appendChild(TodoList(defaultProject));
