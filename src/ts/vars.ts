export const state = {
  time: 7,
  hunger: 0,
  sleep: 0,
  mood: 10,
  money: 100,
  badTick: 0,
  tickSpeed: 2500,
  sick: false,
  depressed: false,
  in_bed: false,

  type: undefined as string | undefined,
  gender: undefined as string | undefined,
  nickname: undefined as string | undefined,
};

export const local = {
  type: localStorage.getItem("localType"),
  adopted: localStorage.getItem("isAdopted"),
  nick: localStorage.getItem("localNick"),
  gender: localStorage.getItem("localGender"),
};

export const urls = {
  cat: "/assets/img/cat.jpg",
  dog: "/assets/img/dog.png",
  seal: "/assets/img/seal.jpg",
  skull: "/assets/img/skull.png",
};

export const dom = {
  get errortext() {
    return document.getElementById("error-text");
  },
  get time() {
    return document.getElementById("time");
  },
  get hunger() {
    return document.getElementById("hunger");
  },
  get mood() {
    return document.getElementById("mood");
  },
  get sleep() {
    return document.getElementById("sleep");
  },
  get money() {
    return document.getElementById("money");
  },
  get pet() {
    return document.getElementById("pet") as HTMLImageElement | null;
  },
  get name() {
    return document.getElementById("name");
  },
  get unhealthy() {
    return document.getElementById("unhealthy");
  },
  get tired() {
    return document.getElementById("tired");
  },
  get depressed() {
    return document.getElementById("depressed");
  },
  get death() {
    return document.getElementById("death");
  },
  get speed() {
    return document.getElementById("speed") as HTMLSelectElement | null;
  }
};

export const btn = {
  feed: document.getElementById("feedBtn"),
  play: document.getElementById("playBtn"),
  bed: document.getElementById("bedBtn"),
  hospital: document.getElementById("hospitalBtn"),
  therapy: document.getElementById("therapyBtn"),
  save: document.getElementById("saveBtn"),
  load: document.getElementById("loadBtn"),
  sub: document.getElementById("subBtn"),
};
