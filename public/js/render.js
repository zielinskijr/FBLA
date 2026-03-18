import { state, info, save } from "./data.js";
import { handleDeath } from "./death.js"
export { renderDom, renderPet, renderWarning, removeWarning };

let emoji;
let pet;

function renderDom() {
    document.getElementById("stats").innerHTML = `
        <h2>stats</h2>
        <p id="hour">Hour: ${state.hour}</p>
        <p id="day">Day: ${state.day}</p>
        <p id="hunger">Hunger: ${state.hunger}</p>
        <p id="mood">Happiness: ${state.mood}</p>
        <p id="sleep">Sleepiness: ${state.sleep}</p>
        <p id="money">Money: ${state.money}</p>
    `;
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
      <h1 id="pet-img">${emoji}</h1>
  `;
}

function renderWarning(warningID, priority) {
      removeWarning(warningID)
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

function removeWarning(warningID) {
    if (document.getElementById(warningID)) {
        document.getElementById(warningID).remove();
    }
}
