import {createItem, createProject} from "./todos.js";
import { formatDistanceToNow } from 'date-fns'



const Pj1 = createProject("First Project");
Pj1.createTodo("Title 1", "do nothing 1", "2020,05,13", "super");
Pj1.createTodo("Title 2", "do nothing 2", "2021,02,13", "medium");

Pj1.editValue("1","desc", "ce que jai changer");
console.log(Pj1.list());














