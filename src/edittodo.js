import {mainlist} from "./index.js"
import {htmlclicktitle,clearmain} from "./buildsidelist.js"


const editcontainer = document.querySelector(".edittodo");
const BR = document.createElement("br");
const BR2 = document.createElement("br");
const BR3 = document.createElement("br");
const BR4 = document.createElement("br");
const BR5 = document.createElement("br");

function buildeditbox(list,idz) {
    editcontainer.innerHTML = "";
    editcontainer.style.display = "block";
    let listz = mainlist.lists[list].todos[idz];
    const label1 = document.createElement("label");
    label1.htmlFor = "desc";
    label1.innerHTML = "Your task:";
    editcontainer.append(BR);

    editcontainer.append(label1);
    const inputtext = document.createElement("INPUT");
    inputtext.type = "text";
    inputtext.id = "desc";
    inputtext.className = "edittodo2";
    inputtext.value = listz.desc;
    editcontainer.append(inputtext);
    editcontainer.append(BR2);
    const label2 = document.createElement("label");
    label2.htmlFor = "duedate";
    label2.innerHTML = "The due date:";
    editcontainer.append(label2);
    const inputdate = document.createElement("INPUT");
    inputdate.type = "date";
    inputdate.id = "duedate";
    inputdate.className = "edittodo2";
    inputdate.value = listz.duedate.replace(/,/g, "-");
    editcontainer.append(inputdate);
    editcontainer.append(BR3);
    const radioinput = document.createElement("INPUT");
    radioinput.type = "radio";
    radioinput.id = "urgent";
    radioinput.name = "priority";
    radioinput.value = "urgent";
    editcontainer.append(radioinput);
    const radiolabel = document.createElement("label");
    radiolabel.htmlFor = "urgent";
    radiolabel.innerHTML = "Urgent";
    editcontainer.append(radiolabel);
    const radioinput2 = document.createElement("INPUT");
    radioinput2.type = "radio";
    radioinput2.id = "medium";
    radioinput2.name = "priority";
    radioinput2.value = "medium";
    editcontainer.append(radioinput2);
    const radiolabel2 = document.createElement("label");
    radiolabel2.htmlFor = "medium";
    radiolabel2.innerHTML = "Not urgent";
    editcontainer.append(radiolabel2);
    if (listz.priority == "super") {
        radioinput.checked = true;
    }
    else {radioinput2.checked = true;};
    editcontainer.append(BR4);
    
    const btnsend = document.createElement("button");
    editcontainer.append(BR5);
    btnsend.type = "submit";
    btnsend.className = "button";
    btnsend.innerHTML = "save";
    btnsend.onclick = function() { savetodoclick(list, idz);};
    editcontainer.append(btnsend);
    const btndelete = document.createElement("button");
    btndelete.type = "submit";
    btndelete.className = "button";
    btndelete.innerHTML = "delete task";
    btndelete.onclick = function() { deletetodo(this);};
    editcontainer.append(btndelete);


    
};

function savetodoclick(list,idz) { 
    let description = document.getElementById("desc");
    mainlist.lists[list].todos[idz].desc = description;
    let thedutedate = document.getElementById("duedate");
    mainlist.lists[list].todos[idz].duedate = thedutedate.value.replace(/-/g, ",");
    let radio = document.querySelector('input[name=priority]:checked');
    mainlist.lists[list].todos[idz].priority = radio.value;
    
    editcontainer.innerHTML = "";
    editcontainer.style.display = "none";
    htmlclicktitle(list);
    
};
export {savetodoclick, buildeditbox}