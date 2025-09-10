let content=document.createElement("div");
content.setAttribute("id","content");
//for title
let container1=document.createElement("div");
container1.setAttribute("class","container");
content.append(container1);

let card1=document.createElement("div");
card1.setAttribute("class","card");
card1.setAttribute("id","first");
let card1head=document.createElement("div");
card1head.textContent="BARITE";
card1head.setAttribute("class","cardHeading");
card1.appendChild(card1head);
let card1Text=document.createElement("div");
card1Text.textContent="Your second kitchen";
card1Text.setAttribute("class","cardText");
card1.appendChild(card1Text);
container1.appendChild(card1);
   
//Quotation
let container2=document.createElement("div");
container2.setAttribute("class","container");
content.append(container2);

let card2=document.createElement("div");
card2.setAttribute("class","card");
let card2Text=document.createElement("div");
card2Text.textContent="This place is just right! From the food to the view, it feels like stepping into a storybook where every bite makes you want to stay a little longer.";
card2Text.setAttribute("class","cardText");
let card2head=document.createElement("div");
card2head.textContent="~Gol D Roger";
card2head.setAttribute("id","card2head");
card2head.setAttribute("class","cardHeading");
card2.appendChild(card2Text);
card2.appendChild(card2head);
container2.appendChild(card2);

//Working Hours
let container3=document.createElement("div");
container3.setAttribute("class","container");
content.append(container3);
let card3=document.createElement("div");
card3.setAttribute("class","card");
card3.setAttribute("id","first");
let card3List=document.createElement("ol");
card3List.setAttribute("class","cardList");
let card3head=document.createElement("div");
card3head.textContent="Working Hours";
card3head.setAttribute("class","cardHeading");
card3.appendChild(card3head);
card3.appendChild(card3List);
container3.appendChild(card3);
let li1=document.createElement("li");
li1.textContent=`Monday ${'\u00A0'.repeat(5)}: 8am - 8pm`;
card3List.append(li1);
let li2=document.createElement("li");
li2.textContent=`Tuesday ${'\u00A0'.repeat(4)}: 6am - 6pm`;
card3List.append(li2);
let li3=document.createElement("li");
li3.textContent=`Wednesday : 6am - 6pm`;
card3List.append(li3);
let li4=document.createElement("li");
li4.textContent=`Thursday ${'\u00A0'.repeat(2)}: 6am - 6pm`;
card3List.append(li4);
let li5=document.createElement("li");
li5.textContent=`Friday ${'\u00A0'.repeat(7)}: 6am - 10pm`;
card3List.append(li5);
let li6=document.createElement("li");
li6.textContent=`Saturday ${'\u00A0'.repeat(3)}: 6am - 10pm`;
card3List.append(li6);
let li7=document.createElement("li");
li7.textContent=`Sunday ${'\u00A0'.repeat(5)}: 8am - 10pm`;
card3List.append(li7);

//Location
let container4=document.createElement("div");
container4.setAttribute("class","container");
content.append(container4);

let card4=document.createElement("div");
card4.setAttribute("class","card");
let card4Text=document.createElement("div");
card4Text.textContent="East Blue, near Syrup Village, floating restaurant at sea";
card4Text.setAttribute("class","cardText");
let card4head=document.createElement("div");
card4head.textContent="Location";
card4head.setAttribute("class","cardHeading");
card4.appendChild(card4head);
card4.appendChild(card4Text);
container4.appendChild(card4);

export{content};