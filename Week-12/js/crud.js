import {app} from "./app.js"

import {getFirestore, collection, getDocs, updateDoc, deleteDoc, doc,} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

const dreamsRef = document.querySelector("#dreams");

async function getDreams() {
    const dreamsDocs = await getDocs(dreamsCollection);

    console.log("dreamDocs.docs", dreamsDocs.docs)

    dreamsRef.innerHTML = "";

    for(let i = 0; i < dreamsDocs.docs.length; i++) {
        const currentDream = dreamsDocs.docs[i];

        const data = currentDream.data();

        const newDiv = document.createElement("div")
        newDiv.classList.add("dream")
        newDiv.innerHTML += `<h4>${data.Dreams}</h4>
        <p>${data.hearts || 0}</p>`

        const dreamHTML = `<div class="dream">
        <h4>${data.Dreams}</h4>
        <p>${data.hearts || 0}</p>
        </div>`;

        console.log("Hello!")
        
        const newPTag = document.createElement("p");
        const newEditButton = document.createElement("button");
        newEditButton.innerHTML = "Edit";
        newEditButton.classList.add("edit")

        const newHeartButton = document.createElement("button");
        newHeartButton.classList.add("heart")
        newHeartButton.innerHTML = "&hearts;"
        newHeartButton.dataset.id = currentDream.id;
        newHeartButton.dataset.hearts = data.hearts || 0;
        newHeartButton.onclick = addHeart;

        newPTag.appendChild(newEditButton);
        newPTag.appendChild(newHeartButton);
        newDiv.appendChild(newPTag);

        dreamsRef.appendChild(newDiv);
    }
}

async function addHeart(e) {
    console.log("Add Heart", e.target.dataset.id)

    const newHeartCount = Number(e.target.dataset.hearts) + 1;

    const dreamsToUpdate = doc(dreamsCollection, e.target.dataset.id)

    await updateDoc(dreamsToUpdate, { hearts: newHeartCount })

    //alert("Dream Updated")
    getDreams();
}

getDreams();