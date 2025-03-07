const adventureRef = document.querySelector("#adventure")

const bodyRef = document.getElementById("background");

const navRef = document.getElementById("nav");

const navLinkRef = document.getElementById("navLink");

const startButtonRef = document.getElementById("startButton");

const titleRef = document.getElementById("title");

function startAdventure() {

    bodyRef.style.backgroundColor = "rgb(67, 67, 67)";
    bodyRef.style.color = "bisque";
    navRef.style.backgroundColor = "rgb(100, 100, 100)";
    navLinkRef.style.color = "rgb(255, 197, 126)";

    titleRef.innerHTML = "The Sandstone Ruins"

    startButtonRef.style.backgroundColor = "rgb(212, 0, 255)";
    startButtonRef.innerHTML = "Reset Story";

    adventureRef.innerHTML = "<p>You awaken in an ancient sandstone ruins, underneath the earth, light peering in from the cracks in the roof. Sand slowly seeps in from the cracks, forming small piles.</p>";
    adventureRef.innerHTML = "<p>As you look around you notice three sandstone pillars, holding up the circular room, A door between each one.</p>";

}