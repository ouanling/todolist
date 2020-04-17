

import { formatDistanceToNow } from 'date-fns'
const createItem = (id,title, desc, duedate, priority) => {
    let o = {
        id,
        title,
        desc,
        duedate,
        priority
    }
    
    const edit = (tomod, valeur) => {
        o[tomod] = valeur;
    };

    const toObj = () => {
        return {...o}
    };
    return {edit, toObj, ...o}
};

const createProject = (title) => {
    let Title = title;
    let itemid = 0;
    const getId = () => { return itemid};
    const getTitle = () => { return Title};
    // createdate
    let projectItems = [];
    const addTodo = (obj) => {
        projectItems.push(obj);

    };
    let createTodo = (title,desc,duedate,priority) => {
        var id = projectItems.length;
        var it = createItem(id,title,desc,duedate,priority);
        addTodo(it.toObj());

    };
    let timeLeft = (id) => { 
        var rez =
        formatDistanceToNow(
            new Date(projectItems[id].duedate
          ));
          return rez;
    };
    let editValue = (id, keyz, value) => {
        projectItems[id][keyz] = value;

    };
    let remove = (id) => {
        projectItems.splice(id, 1);
    };
  
    let list = () => {return projectItems};
return {...projectItems, addTodo, list,createTodo,getTitle, timeLeft,editValue,remove};


};
export {createItem,createProject}
