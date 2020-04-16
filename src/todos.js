

const createItem = (a, b, c, d) => {
    const title = a;
    const desc = b;
    const duedate = c;
    const priority = d;
    const mod = (tomod, valeur) => {
        console.log(tomod, valeur);
        switch (tomod) {
            
            case "title":
                title = valeur;
                break;
            case "desc":
                desc = valeur;
                break;
            case "duedate":
                duedate = valeur;
                break;
            case "priority":
                priority = valeur;
                break;
        }
     };
     const toObj = () => {
         return {title,desc,duedate,priority}
     };
     return {title, desc,duedate,priority,mod,toObj}
    
};


export {createItem}