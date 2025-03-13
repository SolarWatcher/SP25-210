function aboutPage() {
    window.location.href = 'about.html'
}

function catalogPage() {
    window.location.href = 'catalog.html'
}

const menuRef = document.querySelector("#homeCatalog");

const menuItems = [
    {image: "/Midterm/ImagesForMidterm/i210-midterm-product1.webp"},
    {image: "/Midterm/ImagesForMidterm/i210-midterm-product2.webp"},
    {image: "/Midterm/ImagesForMidterm/i210-midterm-product3.webp"},
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