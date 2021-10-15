const db = {
  sonya: {
    name: "Sonya",
    hp: 100,
    img: "./assets/sonya.gif",
    weapon: ["sword", "glave", "mace"],
    attack() {
      console.log(`${this.name} Fight...`);
    },
  },
  kitana: {
    name: "Kitana",
    hp: 100,
    img: "./assets/kitana.gif",
    weapon: ["bow", "polearm", "dart"],
    attack() {
      console.log(`${this.name} Fight...`);
    },
  },
  scorpion: {
    name: "Scorpion",
    hp: 100,
    img: "./assets/scorpion.gif",
    weapon: ["dart"],
    attack() {
      console.log(`${this.name} Fight...`);
    },
  },
  liukang: {
    name: "Liu Kang",
    hp: 100,
    img: "./assets/liukang.gif",
    weapon: ["dart"],
    attack() {
      console.log(`${this.name} Fight...`);
    },
  },
  subzero: {
    name: "subzero",
    hp: 100,
    img: "./assets/subzero.gif",
    weapon: [],
    attack() {
      console.log(`${this.name} Fight...`);
    },
  },
};
