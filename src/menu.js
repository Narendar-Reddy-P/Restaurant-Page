export let content=document.createElement("div");
content.setAttribute("id","content");
//for title
let container1=document.createElement("div");
container1.setAttribute("class","container");
container1.textContent="Menu";
container1.setAttribute("id","first");
content.append(container1);
// sub-title
let container2=document.createElement("div");
container2.setAttribute("class","container");
container2.textContent="Bevarages";
container2.setAttribute("id","first");
content.append(container2);
//berverage-1
let container3=document.createElement("div");
container3.setAttribute("class","container");
content.append(container3);

let card3=document.createElement("div");
card3.setAttribute("class","card");
let card3Text=document.createElement("div");
card3Text.textContent="Cherry pie is good that I would Die";
card3Text.setAttribute("class","cardText");
let card3head=document.createElement("div");
card3head.textContent="Cherry pie";
card3head.setAttribute("class","cardHeading");
card3.appendChild(card3head);
card3.appendChild(card3Text);
container3.appendChild(card3);


   