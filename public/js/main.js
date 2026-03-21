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

if (state.dead == false && !(state.day >= 7)) {
    mainLoop = setInterval(() => {
      if (state.day <= 6) {
        handleTicks()
        handleWarnings()
      if (state.dead != true) {
        renderDom()
      }
      } else {
        save("state")
        window.location.href = "/end.html"
      }

   }, 1500);
 } else if (state.dead == true) {
   death();
} else if (state.day >= 7) {
  window.location.href = "/end.html"
}
