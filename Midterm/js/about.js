//References to the Dom
const menuRef = document.querySelector("#latestNewsAbout");

//Data
const menuItems = [
    {image: "https://picsum.photos/300/200", text: "The Annual Novelty Showcase: Witness the Unveiling of the Unbelievable.", date: "Feb 10", },
    {image: "https://picsum.photos/310/200", text: "Innovation & Absurdity: Our Exclusive Product Launch Event.", date: "Dec 2. 2024", },
    {image: "https://picsum.photos/320/200", text: "Beyond the Ordinary: A Celebration of Novelty Excellence.", date: "Aug 26. 2024", },
];

menuRef.innerHTML = "";

for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    
    const newArticle = document.createElement("article")
    const newImg = document.createElement("img")

    newImg.src = item.image;
    const newText = "<h4 class='bold'>" + item.text + "</h4>"
    const newDate = "<p>" + item.date + "</p>"

    newArticle.appendChild(newImg);
    newArticle.innerHTML += newText;
    newArticle.innerHTML += newDate;

    menuRef.appendChild(newArticle);
}