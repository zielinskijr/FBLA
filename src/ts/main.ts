/*
This file runs the main game logic, rendering the pets info and ticking the game.
During devleopment, ticks run every second. During production, ticks run every 5 seconds.
Ticks are just making sure that hunger, sleep, and the other things change when they need to.
*/

import { state, dom, urls } from "./vars.js";
import { setupListeners } from "./listeners.js";
import { checkSave } from "./storage.js";
import { renderPet, updateStats, renderDeath } from "./render.js";
import { tickStats, checkWarnings } from "./logic.js";

// The above imports the variables this program needs and imports the functions that this needs.

window.addEventListener("DOMContentLoaded", () => {
  checkSave();
  renderPet();
  updateStats();
  mainLoop();
  setupListeners();
});

// The above is an event listener, listening for whenever the DOM is finished loading it's contents.
// Once it's done loading, it will check if we need to redirect to the adopt page
// Render the pets basic information
// Run the main loop
// And finally, sets up the button event listeners.

function mainLoop() {
  const main_loop = setInterval(() => {
    // The above creates a main loop, ticks everything below once every 1000 ms (defined on the bottom.)
    if (state.time >= 24) {
      state.time = 0;
    } else {
      state.time += 1;
    }

    tickStats();
    checkWarnings();

    if (state.depressed == true || state.sleep == 10 || state.sick == true) {
      state.badTick += 1;
      if (state.badTick == 5) {
        renderDeath();
        clearInterval(main_loop);
      }
    } else {
      state.badTick -= 1;
    }

    updateStats();
  }, state.tickSpeed);
}
