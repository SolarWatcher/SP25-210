import { app } from "./app.js";

import {getFirestore, collection, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

const dreamsRef = document.querySelector("#dreams");

const dreamFormRef = document.querySelector("#new-dream");

const dreamTextRef = document.querySelector("#dream-text");

async function getDreams() {
const dreamsDocs = await getDocs(dreamsCollection);
console.log(dreamsDocs.docs.length);

dreamsRef.innerHTML = ""
for (let i = 0; i < dreamsDocs.docs.length; i++) {
    const currentDream = dreamsDocs.docs[i];
    console.log(currentDream.id, currentDream.data());
    const dreamData = currentDream.data();
    dreamsRef.innerHTML += "<li>" + dreamData.Dreams + "</li>"
    
}
}

async function addNewDream(e) {
    e.preventDefault();
    // prevents the default thing from happening.

    const dreamTextValue = dreamTextRef.value;

    const newDream = await addDoc(dreamsCollection, { Dreams: dreamTextValue });

    console.log(newDream);

    getDreams();

    dreamFormRef.reset();
}

dreamFormRef.onsubmit = addNewDream;

getDreams();
