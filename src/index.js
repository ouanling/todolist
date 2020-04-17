import {createItem, createProject} from "./todos.js";
import { formatDistanceToNow } from 'date-fns'



const Pj1 = createProject("First Project");
Pj1.createTodo("Title 1", "do nothing 1", "2020,05,13", "super");
Pj1.createTodo("Title 2", "do nothing 2", "2021,02,13", "medium");
Pj1.createTodo("Title 3", "do nothing 3", "2021,02,13", "medium");
Pj1.createTodo("Title 4", "do nothing 4", "2021,02,13", "medium");


console.log(Pj1.list());

console.log("remove 1");
Pj1.remove("1");

console.log(Pj1.list());













