import { main_loop } from "./main.js";
import { state, info, save } from "./data.js";
import { handleDeath } from "./actions.js"
export { renderDom, renderPet, removeWarning, death };

const sleepButton = document.getElementById("bed");
let emoji;

function renderDom() {
    document.getElementById("stats").innerHTML = `
        <h2>stats</h2>
        <div id="warnings"></div>
        <p id="hour">Hour: ${state.hour}</p>
        <p id="day">Day: ${state.day}</p>
        <p id="hunger">Hunger: ${state.hunger}</p>
        <p id="mood">Happiness: ${state.mood}</p>
        <p id="sleep">Sleepiness: ${state.sleep}</p>
        <p id="money">Money: ${state.money}</p>
    `;

    if (state.hunger >= 7 && !(state.hunger == 10)) {
      renderWarning("hungry", 0)
    } else if (!(state.hunger == 10)) {
      removeWarning("hungry")
    } else {
      renderWarning("hungry", 1)
      state.hungry = true
      state.hungryTicks += 1
      handleDeath("hungry")

    }

    if (state.mood < 4 && !(state.mood == 0)) {
      renderWarning("depressed", 0)
    } else if (!(state.mood == 0)) {
      removeWarning("depressed")
    } else {
      renderWarning("depressed", 1)
      state.depressed = true
      state.depressedTicks += 1
      handleDeath("depressed")
    }

    if (state.sleep >= 7 && !(state.sleep == 10)) {
      renderWarning("sleepy", 0)
    } else if (!(state.sleep == 10)) {
      removeWarning("sleepy")
    } else {
      renderWarning("sleepy", 1)
      state.sleepy = true
      state.sleepyTicks += 1
      handleDeath("sleepy")
    }

    if (state.influenza == true) {
      renderWarning("sick", 1)
      state.sickTicks += 1
      handleDeath("sick")
    } else {
      removeWarning("sick")
    }

    console.log(state.mood)
}

function renderPet() {
    if (info.type == "dog") {
        emoji = "🐶";
    } else if (info.type == "cat") {
        emoji = "🐱";
    } else if (info.type == "seal") {
        emoji = "🦭";
    }

    document.getElementById("pet").innerHTML = `
      <h1 id="pet">${emoji}</h1>
  `;
}

function renderWarning(warningID, priority) {
    if (!document.getElementById(warningID)) {
        let warning = document.createElement("h3");
        if (priority == 0) {
          warning.className = "warning"
        }
        if (priority == 1) {
          warning.className = "danger"
        }
        warning.id = warningID;
        warning.innerHTML = `${info.nickname} is ${warningID}!`;
        document.getElementById("warnings").appendChild(warning);
    }
}

function removeWarning(warningID) {
    if (document.getElementById(warningID)) {
        document.getElementById(warningID).remove();
    }
}

function death() {
    document.getElementById("pet").innerHTML = "<h1 id='pet'>☠️</h1>";
    document.getElementById("stats").innerHTML = `<h3>${info.nickname} is <em>dead</em>.</h3>`;
    document.getElementById("actions").innerHTML =
        `<button class="adopt" onclick="localStorage.clear();  window.location.href = '/adopt.html';">adopt</button>`;

    state.dead = true;
    save("state");
}
