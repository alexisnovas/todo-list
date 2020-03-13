// import display from './display';
import ProjectList from './projectlist';
import './css/style.css';
import Todo from './todo';
import TodoList from './todolist';
import Project from './project';


// display.pageSetup();
// Project.render();

const list = ProjectList();

list.addProject(Project('Default'));
list.addProject(Project('Office tasks'));

const todo1 = Todo('Buy Groceires', 'buy more groceries', '12 sep 2022', 2);
const todo2 = Todo('Buy Cars', 'buy more groceries', '12 sep 2022', 2);
const todo3 = Todo('Buy Books', 'buy more groceries', '12 sep 2022', 2);
const todo4 = Todo('Finish Homework', 'buy more groceries', '12 sep 2022', 2);

list.projects[0].addTodo(todo1);
list.projects[0].addTodo(todo2);
list.projects[1].addTodo(todo3);
list.projects[1].addTodo(todo4);

list.render();

// console.log(list);
list.renderTodos();
//document.getElementById('columnTwo').appendChild(TodoList(list.projects[0]));
