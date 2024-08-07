//Function to generate the random dice numbers.

function getRandomInt() {
    return Math.floor(Math.random() * 6 + 1);
}
var noob = getRandomInt();
console.log(noob);
function getRandomInt2() {
    return Math.floor(Math.random() * 6 + 1);
}

//Mapping the Images to their respective values.

if (noob === 1){
    console.log("One");
}
else if (noob === 2){
    console.log("Two");
}
else if (noob === 3){
    console.log("Three");
}
else if (noob === 4){
    console.log("Four");
}
else if (noob === 5){
    console.log("Five");
}
else if (noob === 6){
    console.log("Six");
}