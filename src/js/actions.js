import { state } from './main.js'
import { renderDom } from './render.js';
export { feed, play }

function play() {
    state.mood += 1;

    renderDom()

    localStorage.setItem("state", JSON.stringify(state));
}

function feed() {
  state.hunger += 1;
  state.mood += 1;

  renderDom()

  localStorage.setItem("state", JSON.stringify(state));
}

window.feed = feed;