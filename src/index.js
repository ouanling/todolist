import {createItem} from "./todos.js";

const item1 = createItem("chingchong", "mettre chingchong au poubelle", "demain", "super");
console.log(item1.toObj());
item1.mod("title", "jeter le ching chong");
console.log(item1.toObj());


