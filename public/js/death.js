import { state, save, info } from "./data.js";
import { mainLoop } from "./main.js";
import { pet } from "./logic.js"
export { handleDeath, death, rollDeath };

function death() {
    clearInterval(mainLoop)
    document.getElementById("pet").innerHTML = `
      <div id="pet-wrapper">
        <p id="badge">💀</p>
      <h1 class="happy" id="pet-img">🪦</h1>
    </div>`;
    document.getElementById("stats").innerHTML = `<h3>${info.nickname} is <em>dead</em>.</h3>`;
    document.getElementById("actions").innerHTML =
        `<button class="adopt" onclick="localStorage.clear(); window.location.href='/adopt.html'">adopt</button>`;
    pet.classList.add("dead")
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
