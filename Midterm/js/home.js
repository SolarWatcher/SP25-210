function aboutPage() {
    window.location.href = 'about.html'
}

function catalogPage() {
    window.location.href = 'catalog.html'
}

const menuRef = document.querySelector("#homeCatalog");

const menuItems = [
    {image: "https://picsum.photos/200/200"},
    {image: "https://picsum.photos/210/200"},
    {image: "https://picsum.photos/220/200"},
];

menuRef.innerHTML = "";

for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    
    const newArticle = document.createElement("article")
    const newImg = document.createElement("img")

    newImg.src = item.image;

    newArticle.appendChild(newImg);

    menuRef.appendChild(newArticle);
}