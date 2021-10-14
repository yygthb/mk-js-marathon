let countPlayers = 0;
const $arenas = document.querySelector(".arenas");

const sonya = {
  name: "Sonya",
  hp: 100,
  img: "./assets/sonya.gif",
  weapon: ["sword", "glave", "mace"],
  attack() {
    console.log(`${this.name} Fight...`);
  },
};

const kitana = {
  name: "Kitana",
  hp: 100,
  img: "./assets/kitana.gif",
  weapon: ["bow", "polearm", "dart"],
  attack() {
    console.log(`${this.name} Fight...`);
  },
};

const createPlayer = (className, player) => {
  if (countPlayers < 2) {
    const $player = document.createElement("div");
    $player.classList.add(className);

    const $progressbar = document.createElement("div");
    $progressbar.classList.add("progressbar");

    const $life = document.createElement("div");
    $life.style.width = `${player.hp}%`;
    $life.classList.add("life");

    const $name = document.createElement("div");
    $name.innerText = player.name;
    $name.classList.add("name");

    const $character = document.createElement("div");
    $character.classList.add("character");

    const $img = document.createElement("img");
    $img.src = player.img;

    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

    $arenas.appendChild($player);

    countPlayers++;
  } else {
    console.log("На арене одновременно могут находиться только 2 игрока");
  }
};

createPlayer(`player1`, sonya);
createPlayer(`player2`, kitana);
