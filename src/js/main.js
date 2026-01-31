import { renderDom } from './render.js';
import { feed, play } from './actions.js'
export { state };

let state;

const persist = localStorage.getItem("state");

if (persist != null) {
  state = JSON.parse(persist);
} else {
  state = {
    time: 7,
    hunger: 0,
    sleep: 0,
    mood: 10,
    money: 100,
    sick: false,
    depressed: false,
    in_bed: false,

    type: null,
    gender: null,
    nickname: null
  };
}

renderDom()