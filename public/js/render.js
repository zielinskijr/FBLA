import { main_loop } from "./main.js";
import { state, info, save } from "./data.js";
import { try_death } from "./actions.js";
export { renderDom, renderWarning, removeWarning, death };

function renderDom() {
    document.getElementById("main_stats").innerHTML = `
        <p id="hour">Hour: ${state.hour}</p>
        <p id="day">Day: ${state.day}</p>
        <p id="hunger">Hunger: ${state.hunger}</p>
        <p id="mood">Happiness: ${state.mood}</p>
        <p id="sleep">Sleepiness: ${state.sleep}</p>
        <p id="money">Money: ${state.money}</p>
    `;

    document.getElementById("pet").innerHTML = `
        <h1>${info.nickname}</h1>
        <img id="pet-img" src="${info.type}" />
    `;
}

function renderWarning(warningID) {
    if (!document.getElementById(warningID)) {
        let warning = document.createElement("p");
        warning.id = warningID;
        warning.innerHTML = `${info.nickname} is ${warningID}!`;
        document.getElementById("stats").appendChild(warning);
    } else {
        try_death();
    }
}

function removeWarning(warningID) {
    if (document.getElementById(warningID)) {
        document.getElementById(warningID).remove();
    }
}

function death() {
    remove("hungry");
    remove("depressed");
    remove("tired");
    remove("main_stats");

    document.getElementById("pet-img").src = "/assets/img/skull.svg";

    let warning = document.createElement("p");
    warning.id = "death";
    warning.innerHTML = `${info.nickname} is <em>dead</em>.`;
    document.getElementById("stats").appendChild(warning);

    document.getElementById("actions").innerHTML = `
        <button onclick="localStorage.clear();  window.location.href = '/adopt.html';">adopt</button>
    `;

    state.dead = true;
    save("state");
}

function remove(id) {
    if (document.getElementById(id)) {
        document.getElementById(id).remove();
    }
}
