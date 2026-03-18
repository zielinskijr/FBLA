import { state, save } from "./data.js";
import { info } from "./data.js";
export { handleDeath, death, rollDeath };

function death() {
    document.getElementById("pet").innerHTML = "<h1 id='pet-img'>☠️</h1>";
    document.getElementById("stats").innerHTML = `<h3>${info.nickname} is <em>dead</em>.</h3>`;
    document.getElementById("actions").innerHTML =
        `<button class="adopt" onclick="localStorage.clear(); window.location.href = '/adopt.html';">adopt</button>`;
    state.dead = true;
    save("state");
}

function handleDeath(type) {
  if (type == "hungry") {
    if (state.hungryTicks >= 5) {
      rollDeath()
    }
  }
  if (type == "depressed") {
    if (state.depressedTicks >= 5) {
      rollDeath()
    }
  }

  if (type == "sleepy") {
    if (state.sleepyTicks >= 5) {
      rollDeath()
    }
  }

  if (type == "sick") {
    if (state.sickTicks >= 5) {
      rollDeath()
    }
  }
}

function rollDeath() {
  if (Math.floor(Math.random() * 10) == state.key) {
    death()
  }
}
