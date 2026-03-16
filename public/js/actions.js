import { state, save } from "./data.js";
import { renderDom, death } from "./render.js";
import { main_loop } from "./main.js"
export { feed, play, bed, try_death };

function feed() {
  if (state.hunger != 0 && state.hunger > 0) {
    state.hunger -= 1;
    state.mood += 0.5;
    removeWarning("hungry")
    if (state.hunger < 0) {
      state.hunger = 0
    }
  }
    renderDom();
    save("state");
}

function play() {
  if (state.mood != 10 && state.mood < 10) {
    state.mood += 1;
    state.money -= 5;
    removeWarning("depressed")
    if (state.mood > 10) {
      state.mood = 10
    }
  }

  renderDom();
  save("state");
}

function bed() {
    if (state.in_bed == true) {
        state.in_bed = false
    } else {
        state.in_bed = true
    }
}

function try_death(doDeath) {
  if (doDeath = true) {
    death()
  }
    if (Math.floor(Math.random() * 5) == 2) {
        clearInterval(main_loop);
        death()
    }
}

window.feed = feed;
window.play = play;
window.bed = bed;
window.try_death = try_death;
