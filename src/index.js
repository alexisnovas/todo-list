/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Display from './display';
import ProjectManager from './projectManager';
import './css/style.css';

const ui = Display(document.getElementById('container'));

const list = ProjectManager();

// const Test = (a, b) => {
//   const obj1 = a;
//   const obj2 = b;

//   const sum = () => obj1 + obj2;

//   return {
//     obj1,
//     obj2,
//     sum,
//   };
// };

// const test0 = Test(22, 4);
// console.log(`test0: ${test0.obj1}`);
// console.log(`test0 sum: ${test0.sum()}`);

// localStorage.test = JSON.stringify(test0);
// const test1 = JSON.parse(localStorage.test);

// console.log(`test1: ${test1.obj1}`);
// console.log(`test1 sum: ${test1.sum()}`);
