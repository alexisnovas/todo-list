/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Display from './display';
import ProjectManager from './projectManager';
import './css/style.css';

const ui = Display(document.getElementById('container'));

const list = ProjectManager();
