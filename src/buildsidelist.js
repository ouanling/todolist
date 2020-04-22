
import {Project, ListsManager} from "./lists.js"
import {mainlist} from "./index.js"
import {buildeditbox, savetodoclick, newtodobox} from "./edittodo.js"
const thebox = document.querySelector(".lists");
const mainarea = document.querySelector(".content");
function buildsidelist (arr) {
    thebox.innerHTML = "";
    var iz = 0;
    arr.forEach(element => {
        let newDiv = document.createElement("div"); 
        let newI = document.createElement("i");
        let newBr = document.createElement("br");
        let newHr = document.createElement("hr");
        newDiv.dataset.id = iz;
        newDiv.onclick = function () { htmlclicktitle(this.dataset.id) ;};
        newDiv.innerHTML =  element["title"];
        newDiv.className = "titre"
        newI.className = "far fa-minus-square titre"
        newI.id = "icondel"
        newI.dataset.id = iz;
        
        thebox.append(newI, newDiv);
        thebox.append(newBr);
        thebox.style.display = "inline-block";




        iz++
        
    });
    const allremoveicons = document.querySelectorAll("#icondel");
    allremoveicons.forEach(e => {
        e.onclick = function () { mainlist.removeproject(this.dataset.id) ; mainlist.createMenu(); };
     });

    let newproject = document.createElement("i");
    newproject.className = "far fa-plus-square";
    newproject.onclick = function () { var thetitle = prompt("Project Title");
    
    makeProject(thetitle);};
    newproject.id = "newproject";
    thebox.append(newproject);
   
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
    let newBr = document.createElement("br");
    newDiv.dataset.id = element["id"];
    newDiv.dataset.list = idz;
    newDiv.className = element["priority"];
    let dataid = element["id"];
    let duein = mainlist.timeleft(idz,dataid);
    newDiv.innerHTML = `<i class="far fa-edit"  id="icon" data-id="${dataid}"></i>` + "  " + element["desc"] + `<br>` + `<span style="margin-left: 300px;"> due in: ${duein} </span>`;
    mainarea.append(newDiv);
    
    
    });
    let newtodo = document.createElement("i");
    newtodo.className = "far fa-plus-square";
    newtodo.onclick = function () {newtodobox(idz);};
    newtodo.id = "addtodo";
    mainarea.append(newtodo);
    let addclick = document.querySelectorAll("#icon");
    addclick.forEach(e => {
       e.onclick = function () { buildeditbox(idz, this.dataset.id) ;};
    });

};
export {buildsidelist, htmlclicktitle}