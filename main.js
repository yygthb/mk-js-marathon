let countPlayers = 0;
const $arenas = document.querySelector(".arenas");
const $button = document.querySelector(".button");

const player1 = {
  num: 1,
  ...db.liukang,
};

const player2 = {
  num: 2,
  ...db.subzero,
};

const createTag = (tag, className) => {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
};

const createPlayer = (player) => {
  if (countPlayers < 2) {
    const $player = createTag("div", `player${player.num}`);
    const $progressbar = createTag("div", "progressbar");
    const $life = createTag("div", "life");
    const $name = createTag("div", "name");
    const $character = createTag("div", "character");
    const $img = createTag("img");

    $life.style.width = `${player.hp}%`;
    $name.innerText = player.name;
    $img.src = player.img;

    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

    countPlayers++;
    return $player;
  } else {
    console.log("На арене одновременно могут находиться только 2 игрока");
  }
};

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

const $resultTitle = createTag("div", "loseTitle");

const showWinner = (player) => {
  if (player) {
    const winnerName = player.num === 1 ? player2.name : player1.name;
    $resultTitle.innerText = winnerName + " win";
  } else {
    $resultTitle.innerText = "There's draw!";
  }

  return $resultTitle;
};

const getPunchValue = () => {
  return Math.ceil(Math.random() * 20);
};

const clickHandler = (player) => {
  const $playerHp = document.querySelector(`.player${player.num} .life`);
  player.hp -= getPunchValue();
  $playerHp.style.width = player.hp + "%";

  if (player.hp <= 0) {
    $playerHp.style.width = 0;
    player.hp = 0;
    $button.disabled = true;
    $arenas.appendChild(showWinner(player));
  }

  if (player1.hp <= 0 && player2.hp <= 0) {
    $arenas.appendChild(showWinner(null));
  }
};

$button.addEventListener("click", () => {
  clickHandler(player1);
  clickHandler(player2);
});
