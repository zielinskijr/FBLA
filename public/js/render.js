import { state, info } from "./data.js";
import { try_death } from "./actions.js";
export { renderDom ,renderWarning }

function renderDom() {
    document.getElementById("main_stats").innerHTML = `
        <p id="time">Time: ${state.time}</p>
        <p id="hunger">Hunger: ${state.hunger}</p>
        <p id="mood">Happiness: ${state.mood}</p>
        <p id="sleep">Sleepiness: ${state.sleep}</p>
        <p id="money">Money: ${state.money}</p>
    `

    document.getElementById("pet").innerHTML = `
        <h1>${info.nickname}</h1>
        <img src="${info.url}" />
    `
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