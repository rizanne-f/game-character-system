const selectedCharacter = document.getElementById("character");
const manaInput = document.getElementById("mana");
const manaValue = document.getElementById("mana-value");
const createButton = document.querySelector("button");
const characterScreen = document.querySelector('.character-screen');
const characterImage = document.getElementById("character-img");

let characterMana = 100;
let characterImageSrc = './frieren.jpg';

selectedCharacter.addEventListener("change", (e) => {
  if (e.target.value == "Frieren") {
    characterImageSrc = "./frieren.jpg";
    console.log(characterImageSrc);
    return characterMana = manaInput.value = manaValue.textContent = 100;
  }

  else if (e.target.value == "Fern") {
    characterImageSrc = "./fern.jpg";
    return characterMana = manaInput.value = manaValue.textContent = 80;
  }

  characterImageSrc = "./flamme.jpg";
  manaInput.value = manaValue.textContent = 90;
});

createButton.addEventListener('click', () => {
  const character = createMage(selectedCharacter.value, characterMana);
  characterScreen.style.background = '#fff';
  
  const name = document.querySelector('h2');
  name.textContent = character.name;

  const health = document.getElementById('healthVal');
  health.textContent = character.getHealth();

  const mana = document.getElementById('manaVal');
  mana.textContent = character.getMana();

  characterImage.src = characterImageSrc;

});

function createCharacter(name) {
  let health = 100;

  const getHealth = () => health;
  const takeDamage = (amount) => {
    health = health < amount ? 0 : health - amount;
  };

  return { name, getHealth, takeDamage };
}

function createMage(name, mana) {
  const character = createCharacter(name);

  const getMana = () => mana;
  const castSpell = () => {
    if (mana < 10) return false;

    mana -= 10;
    return true;
  };

  return Object.assign({}, character, { getMana, castSpell });
}