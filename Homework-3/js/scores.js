const ulRef = document.querySelector("body > ul");

const average = document.getElementById("average");

ulRef.innerHTML = "";

average.innerHTML = "";

let totalScore = 0

const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38]

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    ulRef.innerHTML += "<li>" + score + "</li>"
}

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
}

let scoreAVG = totalScore / scores.length;

average.innerHTML += "<p>" + scoreAVG + "</p>"