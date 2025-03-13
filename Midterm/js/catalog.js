//References to the Dom
const menuRef = document.querySelector("#catalogSelection");

//Data
const menuItems = [
    {image: "https://picsum.photos/210/200", name: "My First Fire",},
    {image: "https://picsum.photos/220/200", name: "Handy Hand",},
    {image: "https://picsum.photos/230/200", name: "NapSack",},
    {image: "https://picsum.photos/240/200", name: "Hot Tub Wildlife Feeder",},
    {image: "https://picsum.photos/250/200", name: "Toilet Meadow",},
    {image: "https://picsum.photos/260/200", name: "Pudding Pouch",},
];

menuRef.innerHTML = "";

for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    
    const newArticle = document.createElement("article")
    const newImg = document.createElement("img")

    newImg.src = item.image;
    const newText = "<p class='bold'>" + item.name + "</p>"

    newArticle.appendChild(newImg);
    newArticle.innerHTML += newText;

    menuRef.appendChild(newArticle);
}