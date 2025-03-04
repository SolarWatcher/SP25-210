// Reference Variable (referencing the DOM/ HTML page)
const petsULRef = document.querySelector("#pets");

// Data Variables
const pets = ["Cat", "Bnuuy", "Dog", "Fox", "Fish", "Snake", "Biblically Accurate Sepheram"];

console.table(pets);
const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/210",
    "https://picsum.photos/220",
    "https://picsum.photos/230",
    "https://picsum.photos/240",
    "https://picsum.photos/250",
    "https://picsum.photos/260",
]

//Loop through our list
for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    console.log(pet);

    const image = images[i];

    const imageHtml = "<img src='" + image + " 'alt='' />"

    petsULRef.innerHTML += "<li>" + pet + imageHtml + "</li>"
}