
import { formatDistanceToNow } from 'date-fns'
import {buildsidelist} from "./buildsidelist.js"
class Project {
    constructor(title) {
        this.todos = []
        this.title = title
    }

    createTodo(id, desc, duedate, priority) {
        this.todos.push({
            id, desc, duedate, priority
        })
    }
    getTodo() { return this.todos }
} 

class ListsManager {
    constructor() {
        this.lists = []
    }

    makeProject(title) {
        const p = new Project(title)
        this.lists.push(p)
        return p
    }
    removeproject(id) {
        this.lists.splice(id,1)
    }
    removetodo(id, todoid) {
        this.lists[id].todos.splice(todoid,1)
        this.lists[id].todos.forEach( function(item, index) {item.id = index} );
         
    }
    edittodo(idz,todoid,keyz,value) {
        this.lists[idz].todos.forEach( key => { if (key["id"] == todoid) {key[keyz] = value;} ;}  )
        
    }
    timeleft(id,todoid) {
        var rez =
        formatDistanceToNow(
            new Date(this.lists[id].todos[todoid].duedate
          ));
          return rez;
    }
    getTitles() { return this.lists.map(x => x.title) }
    getList() { return this.lists }
    createMenu() {
        var arr = this.lists;
        buildsidelist(arr); }
       
}
export {Project, ListsManager} ;
