

const createItem = (title, desc, duedate, priority) => {
    let o = {
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
    // createdate
    let projectItems = [];
    const addTodo = (obj) => {
        var i = projectItems.lenght;
        var z = obj.toObj();
        projectItems.push(z);

    };
    let list = () => {return projectItems};
return {...projectItems, addTodo, list}


};
const addItemtoProject = () => {};
export {createItem,createProject,addItemtoProject}
