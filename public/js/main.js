import { feed, play, bed, hospital, petShow } from "./actions.js"
import { handleTicks, handleWarnings } from "./logic.js"
import { renderDom, renderPet } from "./render.js";
import { load, save, state } from "./data.js";
import { death } from "./death.js"
export { mainLoop }

let status = load();
let mainLoop;

if (status == "OK") {
    renderPet();
    renderDom();
    handleWarnings();
} else {
    window.location.href = "/tutorial.html";
}

if (state.dead == false) {
    mainLoop = setInterval(() => {
     handleTicks()
     handleWarnings()

     if (state.dead != true) {
       renderDom()
     }
   }, 1500);
 } else {
   death();
}
