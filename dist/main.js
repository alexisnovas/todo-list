!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1},a=(o(r,c),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function d(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],i=t.base?c[0]+t.base:c[0],s=n[i]||0,l="".concat(i," ").concat(s);n[i]=s+1;var u=d(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:v(p,t),references:1}),o.push(l)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=c(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var c=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(c,a[t]):e.appendChild(c)}}function m(e,t,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),c&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function v(e,t){var n,o,r;if(t.singleton){var c=h++;n=f||(f=s(t)),o=p.bind(null,n,c,!1),r=p.bind(null,n,c,!0)}else n=s(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=d(n[o]);a[r].references--}for(var c=i(e,t),s=0;s<n.length;s++){var l=d(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=c}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"#columnOne{\n}\n#columnTwo{\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,d=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(i," */")),c=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([r]).join("\n")}var a,d,i;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(r[a]=!0)}for(var d=0;d<e.length;d++){var i=[].concat(e[d]);o&&r[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i))}},t}},function(e,t,n){"use strict";n.r(t);var o={pageSetup:()=>{const e=document.getElementById("main"),t=document.createElement("div");t.classList.add("container");const n=document.createElement("div");n.classList.add("row");const o=document.createElement("div");o.classList.add("col-6"),o.id="columnOne";const r=document.createElement("h1");r.textContent="Projects";const c=document.createElement("form");c.id="project-form";const a=document.createElement("input");a.type="text",a.id="project-input",a.classList.add("form-control");const d=document.createElement("button");d.classList.add("btn"),d.classList.add("btn-primary"),d.textContent="Add Project";const i=document.createElement("div"),s=document.createElement("ul");s.id="project-list";const l=document.createElement("div");l.classList.add("col-6"),l.id="columnTwo";const u=document.createElement("h1");u.textContent="Lists";const p=document.createElement("form");p.classList.add("form-group"),p.id="todo-form";const m=document.createElement("input");m.id="todo-title",m.classList.add("form-control"),m.placeholder="Add Title";const f=document.createElement("input");f.classList.add("form-control"),f.placeholder="Add description",f.id="todo-desc";const h=document.createElement("input");h.type="date",h.classList.add("form-control"),h.id="todo-date";const v=document.createElement("select");v.classList.add("form-control"),v.id="priority";const g=document.createElement("option");g.value="1",g.textContent="1";const y=document.createElement("option");y.value="2",y.textContent="2";const b=document.createElement("option");b.value="3",b.textContent="3";const C=document.createElement("button");C.classList.add("btn"),C.classList.add("btn-primary"),C.textContent="Add New Todo";const E=document.createElement("div"),j=document.createElement("ul");e.appendChild(t),t.appendChild(n),n.appendChild(o),o.appendChild(r),r.appendChild(c),c.appendChild(a),c.appendChild(d),r.appendChild(i),i.appendChild(s),n.appendChild(l),l.appendChild(u),u.appendChild(p),p.appendChild(m),p.appendChild(f),p.appendChild(h),p.appendChild(v),v.appendChild(g),v.appendChild(y),v.appendChild(b),p.appendChild(C),u.appendChild(E),E.appendChild(j),console.log(e)}};var r=(e="New Task",t,n,o=2)=>{let r="",c=e,a=t,d=n,i=o;const s=Date.now(),l=e=>null!=e,u=e=>!(e<=s);return{title:c,description:a,dueDate:d,priority:i,changeID:e=>{r=e},creationDate:s,changeTitle:e=>{l&&(c=e)},changeDescription:e=>{a=e},changeDueDate:e=>{u&&(d=e),console.log("ERROR: The due date cannot be before the creation date of the task")},changePriority:e=>{i=e}}};var c=e=>{const t=document.createElement("div");t.className="col-12",t.id="TodoList";for(let n=0;n<e.todos.length;n+=1){const o=document.createElement("div");o.className="col-12",o.id=e.todos[n].creationDate,o.innerHTML=`\n      Task: ${e.todos[n].title}<br>\n      Description: ${e.todos[n].description}<br>\n      Due Date: ${e.todos[n].dueDate}<br>\n      Priority: ${e.todos[n].priority}<br>\n      `,t.appendChild(o)}return t};var a=(e="New Project")=>{const t=Date.now().toString();let n=e;const o=[];return{id:t,title:n,changeTitle:e=>{n=e},todos:o,addTodo:e=>{o.push(e)}}};var d=()=>{o.pageSetup();const e=document.querySelector("#project-list"),t=document.getElementById("project-form"),n=document.getElementById("project-input"),d=document.getElementById("todo-form"),i=[],s=()=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(e);for(let t=0;t<i.length;t+=1){const n=document.createElement("li");n.id=i[t].id,n.classList.add("project-item"),n.textContent=i[t].title,e.appendChild(n)}};(()=>{let t;e.addEventListener("click",e=>{"li"===e.target.tagName.toLowerCase()&&(alert(e.target.id),console.log(e.target.tasks),t=e.target.id)})})(),t.addEventListener("submit",e=>{e.preventDefault();const t=n.value;if(null==t||""===t)return;const o=a(t);n.value=null,i.push(o),s()});return d.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("todo-title").value,n=document.getElementById("todo-desc").value,o=document.getElementById("todo-date").value,a=document.getElementById("priority").value,d=r(t,n,o,a);i[0].addTodo(d),console.log(i[0].todos),document.getElementById("columnTwo").appendChild(c(i[0]))}),{projects:i,render:s,addProject:e=>{i.push(e)}}};n(0);const i=d();i.addProject(a("Default")),i.addProject(a("Office tasks"));const s=r("Buy Groceires","buy more groceries","12 sep 2022",2),l=r("Buy Cars","buy more groceries","12 sep 2022",2),u=r("Buy Books","buy more groceries","12 sep 2022",2),p=r("Finish Homework","buy more groceries","12 sep 2022",2);i.projects[0].addTodo(s),i.projects[0].addTodo(l),i.projects[1].addTodo(u),i.projects[1].addTodo(p),i.render(),document.getElementById("columnTwo").appendChild(c(i.projects[0]))}]);