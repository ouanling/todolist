import {createItem, createProject} from "./todos.js";


const item1 = createItem("chingchong", "mettre chingchong au poubelle", "demain", "super");
const item2 = createItem("prout", "prouter en proute", "today", "medium");
const Pj1 = createProject("GrosProject");
Pj1.addTodo(item1);
Pj1.addTodo(item2);

console.log(Pj1.list());




