//References to the Dom
const menuRef = document.querySelector("#latestNewsAbout");

//Data
const menuItems = [
    {image: "ImagesForMidterm/i210-midterm-event1.jpg", text: "The Annual Novelty Showcase: Witness the Unveiling of the Unbelievable.", date: "Feb 10", },
    {image: "ImagesForMidterm/i210-midterm-event2.jpg", text: "Innovation & Absurdity: Our Exclusive Product Launch Event.", date: "Dec 2. 2024", },
    {image: "ImagesForMidterm/i210-midterm-event3.jpg", text: "Beyond the Ordinary: A Celebration of Novelty Excellence.", date: "Aug 26. 2024", },
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