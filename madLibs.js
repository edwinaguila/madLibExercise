let theCrew = 'we';
const theBlackPearl = 'the Highwind';
let timeOfDay = 'stormy afternoon';
let pirateShip = "rubber duck";
const mathTreasure = 5 * 5;

const object = {
    name: "Captain Hook",
    age: 42,
}

let terrain1 = '';
let terrain2 = terrain1 || "sea" 


let chest = "Keyblade";
let treasure = "Kingdom Hearts";


const story = `On a ${timeOfDay}, ${theCrew} set sail on a ${pirateShip} named ${theBlackPearl}. The endless ${terrain2} stretched endlessly before us. Just then, we spotted a mysterious ${chest} floating in the water. 'Could it be ${treasure}?' ${object.name} exclaimed. ${object.name}, knowing he was ${object.age}, ordered us to grab it, so ${theCrew} hauled it aboard and opened it. Did you know 5 × 5 equals ${mathTreasure}? Incredible, right?`;

document.getElementById("madlibs-output").textContent = story;
console.log(story);