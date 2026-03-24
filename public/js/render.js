import { state, info, save } from "./data.js";
export { renderDom, renderPet, renderBadge, renderWarning, renderEnd, removeWarning };

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
        <p id="money">Money: ${state.money}$</p>
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
      <div id="pet-wrapper">
        <p id="badge">${state.badge}</p>
        <h1 class="happy" id="pet-img">${emoji}</h1>
      </div>
  `;
}

function renderEnd() {
  document.getElementById("messages").innerHTML = `
    <h2>congrats, ${info.owner}!</h2>
    <p>you have offically made it to the end, taking care of this pet for 7 days!</p>
    <p>here, you can view the stats of your playthrough.</p>
    <p>if you want, you may adopt a new pet using the button at the bottom of the page</p>
    `
  document.getElementById("stats").innerHTML = `
      <h2>current stats</h2>
      <p id="hunger">Hunger: ${state.hunger}</p>
      <p id="mood">Happiness: ${state.mood}</p>
      <p id="sleep">Sleepiness: ${state.sleep}</p>
      <p id="money">Money: ${state.money}$</p>

      <h2>average stats</h2>
      <p id="avg-hunger">Hunger: ${state.avgHunger}</p>
      <p id="avg-mood">Happiness: ${state.avgMood}</p>
      <p id="avg-sleep">Sleepiness: ${state.avgSleep}</p>
      <p id="add-money">Earned money: ${state.earnedMoney}$</p>
      <p id="spent-money">Spent money: ${state.spentMoney}$</p>

      <h2>bill breakdown</h2>
      <p id="food-spent">Food: ${state.foodMoney}$</p>
      <p id="toy-money">Toys: ${state.playMoney}$</p>
      <p id="vet-money">Vet Money: ${state.vetMoney}$</p>
  `;

  document.getElementById("actions").innerHTML =
      `<button class="adopt" onclick="localStorage.clear(); window.location.href='/adopt.html'">adopt</button>`;
}

function renderBadge(badge) {
  document.getElementById("badge").innerHTML = `<p id="badge">${badge}</p>`
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
