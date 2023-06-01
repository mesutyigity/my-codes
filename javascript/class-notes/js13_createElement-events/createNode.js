console.log("**** CREATE NODE ****");

const langInput = document.querySelector("#input");

//? 1- olustur
const newP = document.createElement("p");

//? 2-Eger text tabanlı bir element ise text dugumunu olustur
// const text = document.createTextNode("Bu bir yeni p elementidir.")
const text = document.createTextNode(langInput.value);

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
newP.appendChild(text);

console.log(newP);
//? 4- Yeni elementin DOM tree baglanmasi (append)

//* main bolumun en sonuna yeni elementi ekler.
const main = document.querySelector("main");
main.appendChild(newP);

//* item-list section'nın onune yeni elementi ekler.
//! Element.before()  ve Element.after() appenChild gibi aslında bir elementi DOM Tree'ye baglar.
const itemListSection = document.querySelector(".item-list");
itemListSection.before(newP);

//* ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------
//? 1) Yontem
newP.id = "paragraf";
newP.className = "par center";
newP.name = "deneme";

//? 2) setAttribute()
newP.setAttribute("id", "new-id");
newP.setAttribute("class", "new-class");
newP.setAttribute("name", "new-class");
newP.setAttribute("type", "button");

//? 3) classList
