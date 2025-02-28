const ulRef = document.querySelector("body > ul");

console.log(ulRef.innerHTML);

ulRef.innerHTML = "";

const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"]

for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    ulRef.innerHTML += "<li>" + instrument + "</li>"
}