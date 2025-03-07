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

    startButtonRef.onclick = reset;

    function reset() {

        window.location.href = 'index.html'

    }

    adventureRef.innerHTML += "<p>You awaken in an ancient sandstone ruins, underneath the earth, light peering in from the cracks in the roof. Sand slowly seeps in from the cracks, forming small piles.</p>"

    const buttonCreatorOne = [
        "Look Around"
    ]

    const buttonCreatorTwo = [
        "Let The Sands Consume You"
    ]

    for (let i = 0; i < buttonCreatorOne.length; i++) {
        const button = buttonCreatorOne[i];
        
        const newButton = document.createElement("button");

        newButton.innerHTML += button

        newButton.onclick = lookAround;

        adventureRef.appendChild(newButton);

    }

    for (let i = 0; i < buttonCreatorTwo.length; i++) {
        const button = buttonCreatorTwo[i];
        
        const newButton = document.createElement("button");

        newButton.innerHTML += button

        newButton.onclick = sandConsume;

        adventureRef.appendChild(newButton);

    }

    function lookAround() {

        adventureRef.innerHTML += "<p>As You look around the room you notice three massive sandstone pillars holding up the roof, Between each pillar is a door.</p>"

    }

    function sandConsume() {

        adventureRef.style.color = "crimson"

        adventureRef.innerHTML += "<p>You give in, laying down and letting the sands slowly pour in, consuming you and burying you forever in these ruins.</p>"

        adventureRef.innerHTML += "<p>Your Adventure Comes To An End.</p>"
    }

}