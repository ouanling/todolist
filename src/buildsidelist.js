
import {Project, ListsManager} from "./lists.js"
const thebox = document.querySelector(".lists")
function buildsidelist (arr) {
    console.log(thebox);
    arr.forEach(element => {
        let newDiv = document.createElement("div"); 
        newDiv.innerHTML = element["title"];
        thebox.append(newDiv);
        
    });

        
   
};
export {buildsidelist}