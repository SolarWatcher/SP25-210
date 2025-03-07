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

        const buttonCreatorThree = [
            {name: "Rotten Door"},
            {name: "Runic Door"},
            {name: "Ruined Door"},
        ]

        for (let i = 0; i < buttonCreatorThree.length; i++) {
            const button = buttonCreatorThree[i];
    
            const newButton = document.createElement("button");
            newButton.innerHTML += button.name
    
            newButton.dataset.doorName = button.name;
    
            newButton.onclick = chooseDoor;
    
            adventureRef.appendChild(newButton);
            
        }

        function chooseDoor(e) {

            console.log(e.currentTarget);
            const doorName = e.currentTarget.dataset.doorName;
    
            const confirmChoice = confirm("Are you sure you want to enter " + doorName + "?")
    
            if(confirmChoice) {
                adventureRef.innerHTML += "<p>You have entered the " + doorName +"</p>"

                if (doorName == "Rotten Door") {
                    bodyRef.style.color = "rgb(64, 220, 134)";

                    adventureRef.innerHTML += "<p>Beyond the " + doorName + " lies a simple room covered in mushrooms and vines. As you glance behind you the door has turned into a wall</p>"
                    adventureRef.innerHTML += "<p>Your mind begins to haze, and your vision goes fuzzy. What do you do?</p>"

                    const buttonCreatorFour = [
                        {option: "Try and Resist"},
                        {option: "Eat a Mushroom"},
                    ]
            
                    for (let i = 0; i < buttonCreatorFour.length; i++) {
                        const button = buttonCreatorFour[i];
                
                        const newButton = document.createElement("button");
                        newButton.innerHTML += button.option
                
                        newButton.dataset.optionName = button.option;
                
                        newButton.onclick = chooseOption;
                
                        adventureRef.appendChild(newButton);
                        
                    }

                    function chooseOption(e) {

                        console.log(e.currentTarget);
                        const optionName = e.currentTarget.dataset.optionName;
                
                        const confirmChoice = confirm("Are you sure you want to choose to " + optionName + "?")
                
                        if(confirmChoice) {
                            adventureRef.innerHTML += "<p>You chose to " + optionName + "</p>"
                
                            if (optionName == "Try and Resist") {

                                adventureRef.style.color = "crimson";
                                bodyRef.style.color = "crimson";

                                adventureRef.innerHTML += "<p>The effects overwhelm you. You collapse to the floor as your vision fades to black.</p>"

                                adventureRef.innerHTML += "<p>Your Adventure Comes To An End.</p>"

                            }
                            else if (optionName == "Eat a Mushroom") {
                                bodyRef.style.color = "bisque";
                                
                                adventureRef.innerHTML += "<p>The effects subside. An ominous door appears on the other end of the room allowing for your exit.</p>"

                                const buttonCreatorFive = [
                                    {option: "Stand still and wait"},
                                    {option: "Exit the room"},
                                ]
                        
                                for (let i = 0; i < buttonCreatorFive.length; i++) {
                                    const button = buttonCreatorFive[i];
                            
                                    const newButton = document.createElement("button");
                                    newButton.innerHTML += button.option
                            
                                    newButton.dataset.optionName = button.option;
                            
                                    newButton.onclick = chooseOption;
                            
                                    adventureRef.appendChild(newButton);
                                    
                                }

                                function chooseOption(e) {

                                    console.log(e.currentTarget);
                                    const optionName = e.currentTarget.dataset.optionName;
                            
                                    const confirmChoice = confirm("Are you sure you want to choose to " + optionName + "?")
                            
                                    if(confirmChoice) {
                                        adventureRef.innerHTML += "<p>You chose to " + optionName + "</p>"
                            
                                        if (optionName == "Stand still and wait") {
                                            bodyRef.style.color = "greenyellow";
            
                                            adventureRef.innerHTML += "<p>As you stand still your vision suddenly goes black. You wake up half covered in sand in the middle of nowhere...</p>"
            
                                            adventureRef.innerHTML += "<p>You've escaped the ruins!.. Or have you..?</p>"
            
                                        }
                                        else if (optionName == "Exit the room") {
                                            adventureRef.style.color = "crimson";
                                            bodyRef.style.color = "crimson";
                                            
                                            adventureRef.innerHTML += "<p>As you attempt to exit the room the vines suddenly dart out, Impaling you.. Your vision fades to black.</p>"

                                            adventureRef.innerHTML += "<p>Your Adventure Comes To An End.</p>"
            
                                        }
                                    }
                                }
                            }

                        }
                
                    }

                }
                else if (doorName == "Runic Door") {
                    bodyRef.style.color = "rgb(112, 245, 223)";

                    adventureRef.innerHTML += "<p>Beyond the " + doorName + " lies a complex room covered in glowing runes that hum at your pressence. As you glance behind you the door has turned into a wall</p>"
                    adventureRef.innerHTML += "<p>Blue runes appear in the air, they seem to start counting down. What do you do?</p>"

                    const buttonCreatorFour = [
                        {option: "Panic start hitting the runes around the room"},
                        {option: "Study the floating runes in the air"},
                    ]
            
                    for (let i = 0; i < buttonCreatorFour.length; i++) {
                        const button = buttonCreatorFour[i];
                
                        const newButton = document.createElement("button");
                        newButton.innerHTML += button.option
                
                        newButton.dataset.optionName = button.option;
                
                        newButton.onclick = chooseOption;
                
                        adventureRef.appendChild(newButton);
                        
                    }

                    function chooseOption(e) {

                        console.log(e.currentTarget);
                        const optionName = e.currentTarget.dataset.optionName;
                
                        const confirmChoice = confirm("Are you sure you want to choose to " + optionName + "?")
                
                        if(confirmChoice) {
                            adventureRef.innerHTML += "<p>You chose to " + optionName + "</p>"
                
                            if (optionName == "Panic start hitting the runes around the room") {

                                adventureRef.style.color = "crimson";
                                bodyRef.style.color = "crimson";

                                adventureRef.innerHTML += "<p>Upon slapping one of the random runes it causes the room to collapse, caving in on top of you and burying you beneath the sands</p>"

                                adventureRef.innerHTML += "<p>Your Adventure Comes To An End.</p>"

                            }
                            else if (optionName == "Study the floating runes in the air") {
                                
                                adventureRef.innerHTML += "<p>You find that there is a rune that isn't changing as it counts down, as you look around you spot that rune upon the wall</p>"

                                const buttonCreatorFive = [
                                    {option: "Wait for the timer to finish"},
                                    {option: "Go and press the rune that you found a second of"},
                                ]
                        
                                for (let i = 0; i < buttonCreatorFive.length; i++) {
                                    const button = buttonCreatorFive[i];
                            
                                    const newButton = document.createElement("button");
                                    newButton.innerHTML += button.option
                            
                                    newButton.dataset.optionName = button.option;
                            
                                    newButton.onclick = chooseOption;
                            
                                    adventureRef.appendChild(newButton);
                                    
                                }

                                function chooseOption(e) {

                                    console.log(e.currentTarget);
                                    const optionName = e.currentTarget.dataset.optionName;
                            
                                    const confirmChoice = confirm("Are you sure you want to choose to " + optionName + "?")
                            
                                    if(confirmChoice) {
                                        adventureRef.innerHTML += "<p>You chose to " + optionName + "</p>"
                            
                                        if (optionName == "Wait for the timer to finish") {
                                            adventureRef.style.color = "crimson";
                                            bodyRef.style.color = "crimson";
            
                                            adventureRef.innerHTML += "<p>As the timer finishes the room suddenly rumbles, before collapsing in on it's self. You are buried beneath the sands and debris, lost to time.</p>"
            
                                            adventureRef.innerHTML += "<p>Your Adventure Comes To An End.</p>"
            
                                        }
                                        else if (optionName == "Go and press the rune that you found a second of") {
                                            bodyRef.style.color = "greenyellow";
                                            
                                            adventureRef.innerHTML += "<p>As you press the rune the counter stops and a flash of blue light flares up around you. You find yourself standing in the middle of nowhere</p>"

                                            adventureRef.innerHTML += "<p>You've escaped the ruins!.. Or have you..?</p>"
            
                                        }
                                    }
                                }
                            }

                        }
                
                    }

                }
                else if (doorName == "Ruined Door") {
                    bodyRef.style.color = "rgb(255, 222, 90)";

                    adventureRef.innerHTML += "<p>Beyond the " + doorName + " lies a broken down room with cracks running through the floors and walls. As you glance behind you the door has turned into a wall</p>"
                    "<p>As you glance back sand start pouring in from the cracks in the wall, begining to flood the room. What do you do?</p>"

                    const buttonCreatorFour = [
                        {option: "Try and crawl through one of the cracks"},
                        {option: "Let the sand pile in"},
                    ]
            
                    for (let i = 0; i < buttonCreatorFour.length; i++) {
                        const button = buttonCreatorFour[i];
                
                        const newButton = document.createElement("button");
                        newButton.innerHTML += button.option
                
                        newButton.dataset.optionName = button.option;
                
                        newButton.onclick = chooseOption;
                
                        adventureRef.appendChild(newButton);
                        
                    }

                    function chooseOption(e) {

                        console.log(e.currentTarget);
                        const optionName = e.currentTarget.dataset.optionName;
                
                        const confirmChoice = confirm("Are you sure you want to choose to " + optionName + "?")
                
                        if(confirmChoice) {
                            adventureRef.innerHTML += "<p>You chose to " + optionName + "</p>"
                
                            if (optionName == "Let the sand pile in") {

                                adventureRef.style.color = "crimson";
                                bodyRef.style.color = "crimson";

                                adventureRef.innerHTML += "<p>The sands slowly fill the room, covering up the few cracks you could crawl through, soon you are buried beneath the sand as well.</p>"

                                adventureRef.innerHTML += "<p>Your Adventure Comes To An End.</p>"

                            }
                            else if (optionName == "Try and crawl through one of the cracks") {
                                
                                adventureRef.innerHTML += "<p>As you crawl through one of the cracks you find yourself in a room, a circular hole in the roof with a ladder hanging down from it. Sand still pours in behind you.</p>"

                                const buttonCreatorFive = [
                                    {option: "Let the sand pile in"},
                                    {option: "Climb out quickly!!"},
                                ]
                        
                                for (let i = 0; i < buttonCreatorFive.length; i++) {
                                    const button = buttonCreatorFive[i];
                            
                                    const newButton = document.createElement("button");
                                    newButton.innerHTML += button.option
                            
                                    newButton.dataset.optionName = button.option;
                            
                                    newButton.onclick = chooseOption;
                            
                                    adventureRef.appendChild(newButton);
                                    
                                }

                                function chooseOption(e) {

                                    console.log(e.currentTarget);
                                    const optionName = e.currentTarget.dataset.optionName;
                            
                                    const confirmChoice = confirm("Are you sure you want to choose to " + optionName + "?")
                            
                                    if(confirmChoice) {
                                        adventureRef.innerHTML += "<p>You chose to " + optionName + "</p>"
                            
                                        if (optionName == "Let the sand pile in") {
                                            adventureRef.style.color = "crimson";
                                            bodyRef.style.color = "crimson";
            
                                            adventureRef.innerHTML += "<p>As the sand piles in you find yourself trapped. Buried beneath it and lost alongside the ruins.</p>"
            
                                            adventureRef.innerHTML += "<p>Your Adventure Comes To An End.</p>"
            
                                        }
                                        else if (optionName == "Climb out quickly!!") {
                                            bodyRef.style.color = "greenyellow";
                                            
                                            adventureRef.innerHTML += "<p>You quickly climb the ladder and escape. The ruins are buried beneath the sands, lost to time once more.</p>"

                                            adventureRef.innerHTML += "<p>You've escaped the ruins!</p>"
            
                                        }
                                    }
                                }
                            }

                        }
                
                    }

                }
            }
    
        }

    }

    function sandConsume() {

        adventureRef.style.color = "crimson";
        bodyRef.style.color = "crimson";

        adventureRef.innerHTML += "<p>You give in, laying down and letting the sands slowly pour in, consuming you and burying you forever in these ruins.</p>"

        adventureRef.innerHTML += "<p>Your Adventure Comes To An End.</p>"
    }

}