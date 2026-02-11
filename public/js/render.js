import { state, info } from "./data.js";
import { try_death } from "./actions.js";
export { renderDom ,renderWarning }

function renderDom() {
    document.getElementById("time").innerHTML = "Time: " + state.time;
    document.getElementById("hunger").innerHTML = "Hunger: " + state.hunger;
    document.getElementById("sleep").innerHTML = "Sleepiness: " + state.sleep;
    document.getElementById("mood").innerHTML = "Happiness: " + state.mood;
    document.getElementById("money").innerHTML = "Money: " + state.money;

    document.getElementById("pet").src = info.url;
    document.getElementById("name").innerHTML = info.nickname;
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