!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1},i=(o(r,c),r.locals?r.locals:{});e.exports=i},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],d=t.base?c[0]+t.base:c[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=a(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:v(p,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=c(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var c=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function m(e,t,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),c&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function v(e,t){var n,o,r;if(t.singleton){var c=h++;n=f||(f=l(t)),o=p.bind(null,n,c,!1),r=p.bind(null,n,c,!0)}else n=l(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=d(e,t),l=0;l<n.length;l++){var s=a(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=c}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{\n  font-size: 14px;\n  font-family: 'Open Sans';\n  max-width: 1400px;\n}\nbutton{\n  margin-top: 10px;\n}\ninput{\n  margin: 5px 0;\n}\n.container{\n  width: 100%;\n  margin: 2rem auto;\n}\n.active{\n  font-weight: bold;\n  color: blue;\n}\n.project-item:focus{\n  font-weight: bold;\n  color: blue;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(d," */")),c=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([r]).join("\n")}var i,a,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";n.r(t);var o=()=>({pageSetup:()=>{const e=document.getElementById("container"),t=document.createElement("div");t.classList.add("row"),e.appendChild(t);const n=document.createElement("div");n.classList.add("col-md-4"),n.id="column-one",t.appendChild(n);const o=document.createElement("h1");o.textContent="Projects",n.appendChild(o);const r=document.createElement("form");r.id="project-form";const c=document.createElement("input");c.type="text",c.id="project-input",c.classList.add("form-control");const i=document.createElement("button");i.classList.add("btn"),i.classList.add("btn-primary"),i.textContent="Add Project",n.appendChild(r),r.appendChild(c),r.appendChild(i);const a=document.createElement("ul");a.id="project-list",n.appendChild(a);const d=document.createElement("div");d.classList.add("col-md-8"),d.id="column-two",t.appendChild(d);const l=document.createElement("h1");l.textContent="Lists",d.appendChild(l);const s=document.createElement("form");s.classList.add("form-group"),s.id="todo-form";const u=document.createElement("input");u.id="todo-title",u.classList.add("form-control"),u.placeholder="Add Title";const p=document.createElement("input");p.classList.add("form-control"),p.placeholder="Add description",p.id="todo-desc";const m=document.createElement("input");m.type="date",m.classList.add("form-control"),m.id="todo-date";const f=document.createElement("select");f.classList.add("form-control"),f.id="priority";const h=document.createElement("option");h.value="1",h.textContent="1";const v=document.createElement("option");v.value="2",v.textContent="2";const g=document.createElement("option");g.value="3",g.textContent="3";const y=document.createElement("button");y.classList.add("btn"),y.classList.add("btn-primary"),y.textContent="Add New Todo",d.appendChild(s),s.appendChild(u),s.appendChild(p),s.appendChild(m),s.appendChild(f),f.appendChild(h),f.appendChild(v),f.appendChild(g),s.appendChild(y);const b=document.createElement("ul");b.classList.add("todo-list"),b.id="todo-list",d.appendChild(b)}});var r=(e="New Task",t,n,o=2)=>{let r="",c=e,i=t,a=n,d=o;const l=Date.now(),s=e=>null!=e,u=e=>!(e<=l);return{title:c,description:i,dueDate:a,priority:d,changeID:e=>{r=e},creationDate:l,changeTitle:e=>{s&&(c=e)},changeDescription:e=>{i=e},changeDueDate:e=>{u&&(a=e),console.log("ERROR: The due date cannot be before the creation date of the task")},changePriority:e=>{d=e}}};var c=(e="New Project")=>{const t=Date.now().toString();let n=e;const o=[];return{id:t,title:n,changeTitle:e=>{n=e},todos:o,addTodo:e=>{o.push(e)}}};var i=()=>{document.querySelector("#project-list"),document.querySelector("#todoList");const e=document.getElementById("project-form"),t=document.getElementById("project-input"),n=document.querySelector("#todo-form"),o=[];let i=0;const a=(e=0)=>{const t=document.getElementById("todo-list");t.innerHTML="";for(let n=0;n<o[e].todos.length;n+=1){const r=document.createElement("li");r.className="col-12",r.id=`todo-${n}`,r.innerHTML=`\n        Task: ${o[e].todos[n].title}<br>\n        Description: ${o[e].todos[n].description}<br>\n        Due Date: ${o[e].todos[n].dueDate}<br>\n        Priority: ${o[e].todos[n].priority}<br>\n        `,t.appendChild(r)}},d=()=>{for(let e=0;e<o.length;e+=1){document.querySelector(`#project-${e}`).classList.remove("active")}},l=()=>{const e=document.getElementById("project-list");e.innerHTML="";for(let t=0;t<o.length;t+=1){const n=document.createElement("li");n.id=`project-${t}`,n.textContent=o[t].title,n.addEventListener("click",()=>{a(t),i=t,d(),n.classList.add("active")}),e.appendChild(n)}},s=(e=0)=>{const t=document.getElementById("todo-title").value,n=document.getElementById("todo-desc").value,c=document.getElementById("todo-date").value,i=document.getElementById("priority").value,d=r(t,n,c,i);o[e].addTodo(d);const l=Object.values(d);document.getElementById("todo-list").innerHTML="",a(e),console.log(l)},u=e=>{o.push(e),l()};return e.addEventListener("submit",e=>{e.preventDefault();const n=t.value;if(null==n||""===n)return;const r=c(n);t.value=null,o.push(r),l()}),n.addEventListener("submit",e=>{e.preventDefault(),s(i),a(i)}),u(c("Default")),l(),a(0),document.getElementById("project-0").classList.add("active"),{projects:o,renderProjects:l,renderTodos:a,addProject:u,addTodoFromForm:s}};n(0);o().pageSetup();i()}]);