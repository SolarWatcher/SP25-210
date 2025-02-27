const titleRef = document.getElementById("title");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");

console.log(itemsRef);

const altTitleRef = document.querySelector("#title");

console.log(altTitleRef);

const itemsAltRef = document.querySelectorAll(".item");

console.log(itemsAltRef);

console.log(titleRef.innerHTML);

const ulRef = document.querySelector("body > ul");

console.log(ulRef.innerHTML);

titleRef.innerHTML = "DOM Manipulation >:)";

ulRef.innerHTML = "";

const melons = ["Cantaloupe", "Watermelon", "Muskmelon", "Regular Melon", "Blind Melon", "Honeydue"]

for (let i = 0; i < melons.length; i++) {
    const melon = melons[i];
    ulRef.innerHTML += "<li class= 'item'>" + melon + "</li>"
    
}