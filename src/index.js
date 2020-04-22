
import { formatDistanceToNow } from 'date-fns'
import {Project, ListsManager} from "./lists.js"
import {buildsidelist} from "./buildsidelist.js"
import {savetodoclick, buildeditbox} from "./edittodo.js"
var listarray = [];





var mainlist = new ListsManager();
const p1 = mainlist.makeProject("titre 1");
const p2 = mainlist.makeProject("titre 2");
const p3 = mainlist.makeProject("titre 3");
p1.createTodo("0", "do nothing 1", "2020,05,13", "super");
p1.createTodo("1", "do nothing 2", "2021,02,13", "medium");
p1.createTodo("2", "do nothing 3", "2021,02,13", "medium");
p1.createTodo("3", "do nothing 4", "2021,02,13", "medium");
p2.createTodo("0", "zdo nothing 1", "2020,05,13", "super");
p2.createTodo("1", "do nothing 2", "2021,02,13", "medium");
p2.createTodo("2", "do nothing 3", "2021,02,13", "medium");
p2.createTodo("3", "do nothing 4", "2021,02,13", "medium");
p3.createTodo("0", "do nothing 1", "2020,05,13", "super");
p3.createTodo("1", "ydo nothing 2", "2021,02,13", "medium");
p3.createTodo("2", "do nothing 3", "2021,02,13", "medium");
p3.createTodo("3", "do nothing 4", "2021,02,13", "medium");
console.log(mainlist);
export {mainlist}
const bodyel = document.body;
const liststoggle = document.createElement("i");
const listvar = document.querySelector(".lists");
console.log(listvar.style.display);
liststoggle.className = "far fa-list-alt fa-3x liststoggle"
liststoggle.onclick = function () { 
    if (listvar.style.display == "inline-block") { listvar.style.display = "none";}
    else {
    mainlist.createMenu();}; };
bodyel.append(liststoggle);



buildsidelist();



function localstore() {
    localStorage.setItem('pagesave', JSON.stringify(mainlist));
};


//localstore();
//var getstore = localStorage.getItem('pagesave');

//console.log('retrievedObject: ', JSON.parse(getstore));



















