const favoriteReptiles = ["Gecko", "Komodo Dragon", "Bearded Dragon"];
// you declare an array with []

console.log(favoriteReptiles);

console.table(favoriteReptiles);
// most arrays start with 0 and end -1 the number of things in an array
// if the array was 3 things long it would start at 0 and end at 2

console.log("First Thing:" + favoriteReptiles[0]);

console.log("Idk", favoriteReptiles[3]);

console.log("number of favorite reptiles", favoriteReptiles.length);

for (let i = 0; i < favoriteReptiles.length; i++) {
    const reptile = favoriteReptiles[i];
    console.log(reptile);
    
}
// i is short for index
// the first part (Let i = 0) is setting i to 0 and declaring I
// the second part (i < favoriteReptiles.length) makes the code run until I is no longer less than the length
// the thing part (i++) adds +1 to i every time the loop successfully runs.
// after all that is done it then does whatever is inside of the for loop
// all variables inside of a for loop are contained within the for loop and do not talk to anything else. Meaning they can be used elsewhere again
// for reference reptile does not exist outside of the for loop above, neither does i

for (let i = favoriteReptiles.length; i > -1; i--) {
    console.log("Index:", i)
    
}
// for this for loop i is = to the length of the favoriteReptiles
// if I is greater than -1 then it runs the loop, decrease i by 1 every time it does so
// this array ends once i is = or greater than -1