import {createItem, createProject} from "./todos.js";
import { formatDistanceToNow } from 'date-fns'

var listarray = [];


const listsManager = () => {
    let makeproject = (title) => { 
        let theid = listarray.length;
        listarray.push(theid);
        listarray[theid] =  createProject(title); };
        

    let showlist = () => {return listarray};
    let titlez = (id) => { return listarray[id].getTitle(); }
    let remove = (id) => {
        listarray.splice(id, 1);
     };
return {makeproject,showlist, titlez,remove};
    };


var mainlist = listsManager();
mainlist.makeproject("titre 1");
mainlist.makeproject("titre 2");
listarray[0].createTodo("Title 1", "do nothing 1", "2020,05,13", "super");
listarray[0].createTodo("Title 2", "do nothing 2", "2021,02,13", "medium");
listarray[0].createTodo("Title 3", "do nothing 3", "2021,02,13", "medium");
listarray[0].createTodo("Title 4", "do nothing 4", "2021,02,13", "medium");
listarray[1].createTodo("Title 1", "do nothing 1", "2020,05,13", "super");
listarray[1].createTodo("Title 2", "do nothing 2", "2021,02,13", "medium");
listarray[1].createTodo("Title 3", "do nothing 3", "2021,02,13", "medium");
listarray[1].createTodo("Title 4", "do nothing 4", "2021,02,13", "medium");
console.log(mainlist.showlist());
console.log(mainlist.titlez("1"));
console.log(listarray[0].title);
function localstore() {
    localStorage.setItem('pagesave', JSON.stringify(listarray));
};
localstore();
var getstore = localStorage.getItem('pagesave');

console.log('retrievedObject: ', JSON.parse(getstore));


















