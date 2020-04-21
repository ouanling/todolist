
import {Project, ListsManager} from "./lists.js"
import {mainlist} from "./index.js"
import {buildeditbox, savetodoclick} from "./edittodo.js"
const thebox = document.querySelector(".lists");
const mainarea = document.querySelector(".content");
function buildsidelist (arr) {
    var iz = 0;
    arr.forEach(element => {
        let newDiv = document.createElement("div"); 
        newDiv.dataset.id = iz;
        newDiv.onclick = function () { htmlclicktitle(this.dataset.id) ;};
        newDiv.innerHTML = element["title"];
        newDiv.className = "titre"
        
        thebox.append(newDiv);
        iz++
        
    });

        
   
};
function clearmain() {
    if (mainarea.hasChildNodes) {
        mainarea.textContent = "";
    };
};
function htmlclicktitle(idz) { 
    clearmain();
    let array = mainlist.lists[idz].todos;
    array.forEach(element => {
    let newDiv = document.createElement("div");
    newDiv.dataset.id = element["id"];
    newDiv.dataset.list = idz;
    newDiv.className = element["priority"];
    let dataid = element["id"];
    newDiv.innerHTML = `<i class="far fa-edit"  id="icon" data-id="${dataid}"></i>` + "  " + element["desc"] + `<br>` + element["duedate"];
    mainarea.append(newDiv);
    });
    let addclick = document.querySelectorAll("#icon");
    addclick.forEach(e => {
       e.onclick = function () { buildeditbox(idz, this.dataset.id) ;};
    });

};
export {buildsidelist}