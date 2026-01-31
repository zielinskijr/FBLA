import { state } from './main.js'

export function renderDom() {
    document.getElementById("time").innerHTML = "Time: " + state.time
    document.getElementById("hunger").innerHTML = "Hunger: " + state.hunger
    document.getElementById("sleep").innerHTML = "Sleepiness: " + state.sleep
    document.getElementById("mood").innerHTML = "Happiness: " + state.mood
    document.getElementById("money").innerHTML = "Money: " + state.money
}
