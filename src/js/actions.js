import { state, save } from './data.js'
import { renderDom } from './render.js';
export { feed, play }

function feed() {
  state.hunger += 1;
  state.mood += 1;

  renderDom()
  save()
}

function play() {
    state.mood += 1;

    renderDom()
    save()
}

window.feed = feed;
window.play = play;