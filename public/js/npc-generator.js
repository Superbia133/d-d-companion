// public/js/npc-generator.js

const names = ["Aelar", "Brynn", "Caelan", "Doran", "Eira"];
const races = ["Elf", "Human", "Dwarf", "Orc", "Halfling"];
const classes = ["Wizard", "Rogue", "Fighter", "Cleric", "Ranger"];
const traits = [
  "Has a mysterious tattoo",
  "Speaks in rhymes",
  "Afraid of water",
  "Hums constantly",
  "Collects shiny objects"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateNPC() {
  const npc = {
    name: getRandomItem(names),
    race: getRandomItem(races),
    class: getRandomItem(classes),
    trait: getRandomItem(traits),
  };

  return npc;
}

function displayNPC() {
  const npc = generateNPC();
  document.getElementById("npc-output").innerHTML = `
    <strong>Name:</strong> ${npc.name}<br>
    <strong>Race:</strong> ${npc.race}<br>
    <strong>Class:</strong> ${npc.class}<br>
    <strong>Trait:</strong> ${npc.trait}
  `;
}

document.getElementById("generate-btn").addEventListener("click", displayNPC);
