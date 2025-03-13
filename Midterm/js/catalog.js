//References to the Dom
const menuRef = document.querySelector("#catalogSelection");

//Data
const menuItems = [
    {image: "/Midterm/ImagesForMidterm/i210-midterm-product1.webp", name: "My First Fire",},
    {image: "/Midterm/ImagesForMidterm/i210-midterm-product2.webp", name: "Handy Hand",},
    {image: "/Midterm/ImagesForMidterm/i210-midterm-product3.webp", name: "NapSack",},
    {image: "/Midterm/ImagesForMidterm/i210-midterm-product4.webp", name: "Hot Tub Wildlife Feeder",},
    {image: "/Midterm/ImagesForMidterm/i210-midterm-product5.webp", name: "Toilet Meadow",},
    {image: "/Midterm/ImagesForMidterm/i210-midterm-product6.webp", name: "Pudding Pouch",},
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