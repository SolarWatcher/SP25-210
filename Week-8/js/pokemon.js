console.log("Pokemon")

function showAlert() {
    // Shows a message 
    alert("Annoying Message");
}

const confirmBtnRef = document.querySelector("#confirm-btn");

function showConfirm() {
    // This is a true of false statement, clicking confirm = true, clicking cancel = false
    userConfirm = confirm("You are a robot, right?");

    console.log(userConfirm);
}

confirmBtnRef.onclick = showConfirm;

console.log(confirmBtnRef);

function showPrompt() {
    const userInput = prompt(
        // The first sentence is the prompt, the second sentence is the auto fill, This is a type of box that lets you type in it.
        "What's your favorite flavor of ice cream?", "Vanilla"
    )
    console.log(userInput)
}

// Code for Pokemon Journey!

const journeyRef = document.querySelector("#journey")

function startJourney() {

    journeyRef.innerHTML = "<p>You are so excited, today you get your first pokemon! Sitting in front of you are pokeballs for Bulbasaur, Charmander, Squirtle. Choose your pokemon!</p>";

    const starterPokemon = [
        {name: "Bulbasaur",
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
        }, 
    {name: "Charmander",
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
        }, 
    {name: "Squirtle",
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
        },
    ];

    for (let i = 0; i < starterPokemon.length; i++) {
        const pokemon = starterPokemon[i];

        const newSection = document.createElement("section");
        newSection.innerHTML += "<img height='100' src='" + pokemon.img + "' alt='" + pokemon.name + "' />";
        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>"

        newSection.dataset.pokemonName = pokemon.name;
        newSection.dataset.pokemonImage = pokemon.img;

        newSection.onclick = choosePokemon;

        journeyRef.appendChild(newSection);
        console.log(pokemon)
        
    }

    function choosePokemon(e) {

        console.log(e.currentTarget);
        const pokemonName = e.currentTarget.dataset.pokemonName;
        const pokemonImage = e.currentTarget.dataset.pokemonImage;

        const confirmChoice = confirm("You choose " + pokemonName)

        if(confirmChoice) {
            journeyRef.innerHTML += "You chose " + pokemonName + " as your starter pokemon."

            myPokemon = { name: pokemonName, img: pokemonImage};
        }

    }

}