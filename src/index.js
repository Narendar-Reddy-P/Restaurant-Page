import "./style.css";
import {content as homeContent} from "./home.js";
import {content as menuContent} from "./menu.js";
import {content as contactContent} from "./contact.js"

let menu=document.querySelector("#menu");
let home=document.querySelector("#home");
let contact=document.querySelector("#contact");
let container=document.querySelector("#mainContainer");


homePressed();

function homePressed(){
   home.classList.add("pressed");
   if(menu.classList.contains("pressed")){
      menu.classList.remove("pressed");
      container.removeChild(menuContent);
   }
   if(contact.classList.contains("pressed")){
      contact.classList.remove("pressed");
      container.removeChild(contactContent);
   }
   container.append(homeContent);
}

function menuPressed(){
   menu.classList.add("pressed");
   if(home.classList.contains("pressed")){
      home.classList.remove("pressed");
      container.removeChild(homeContent);
   }
   if(contact.classList.contains("pressed")){
      contact.classList.remove("pressed");
      container.removeChild(contactContent);
   }
   container.append(menuContent);
}

function contactPressed(){
   contact.classList.add("pressed");
   if(menu.classList.contains("pressed")){
      menu.classList.remove("pressed");
      container.removeChild(menuContent);
   }
   if(home.classList.contains("pressed")){
      home.classList.remove("pressed");
      container.removeChild(homeContent);
   }
   container.append(contactContent);
}

home.addEventListener("click",()=>{
   if(!home.classList.contains("pressed")){
      homePressed();
   }
});

menu.addEventListener("click",()=>{
   if(!menu.classList.contains("pressed")){
      menuPressed();
   }
});

contact.addEventListener("click",()=>{
   if(!contact.classList.contains("pressed")){
      contactPressed();
   }
});

