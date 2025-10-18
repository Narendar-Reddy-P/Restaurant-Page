export let content=document.createElement("div");
content.setAttribute("id","content");
//for title
let container1=document.createElement("div");
container1.setAttribute("class","container");
container1.setAttribute("id","first");
content.append(container1);
let card1=document.createElement("div");
card1.setAttribute("class","card");
let card1Text=document.createElement("div");
card1Text.textContent="Cherry pie is good that I would Die";
card1Text.setAttribute("class","cardText");
let card1head=document.createElement("div");
card1head.textContent="Cherry pie";
card1head.setAttribute("class","cardHeading");
card1.appendChild(card1head);
card1.appendChild(card1Text);
container1.appendChild(card1);

// sub-title
let container2=document.createElement("div");
container2.setAttribute("class","container");
content.append(container2);
let card2=document.createElement("div");
card2.setAttribute("class","card");
let card2Text=document.createElement("div");
card2Text.textContent="Cherry pie is good that I would Die";
card2Text.setAttribute("class","cardText");
let card2head=document.createElement("div");
card2head.textContent="Cherry pie";
card2head.setAttribute("class","cardHeading");
card2.appendChild(card2head);
card2.appendChild(card2Text);
container2.appendChild(card2);
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


   