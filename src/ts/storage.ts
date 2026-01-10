import { state, local } from "./vars.js";

// Check the top of the main.ts file for more information on the above.

function checkSave() {
  const path = window.location.pathname;

  if (
    (path.endsWith("index.html") || path === "/") &&
    local.adopted !== "True"
  ) {
    window.location.href = "adopt.html";
  }
}

// The above checks the window path. If it's index.html, it continues with the if statement.
// If local.adopted is not true, it will redirect you to the adopt page to get yourself a pet.

function localSave() {
  localStorage.setItem("localTime", String(state.time));
  localStorage.setItem("localHunger", String(state.hunger));
  localStorage.setItem("localSleep", String(state.sleep));
  localStorage.setItem("localMood", String(state.mood));
  localStorage.setItem("localMoney", String(state.money));
  localStorage.setItem("localSick", String(state.sick));
  localStorage.setItem("localBad", String(state.bad_tick));
  localStorage.setItem("localDepressed", String(state.depressed));
  localStorage.setItem("localBed", String(state.in_bed));
}

// The above is repition hell. I fucking hate this shit, but it works so I ignore it.

function localLoad() {
  state.time = Number(localStorage.getItem("localTime"));
  state.hunger = Number(localStorage.getItem("localHunger"));
  state.sleep = Number(localStorage.getItem("localSleep"));
  state.mood = Number(localStorage.getItem("localMood"));
  state.money = Number(localStorage.getItem("localMoney"));
  state.sick = Number(localStorage.getItem("localSick"));
  state.bad_tick = Number(localStorage.getItem("localBad"));
  state.depressed = Boolean(localStorage.getItem("localDepressed"));
  state.in_bed = Boolean(localStorage.getItem("localBed"));
}

// The above two either load or save the data from or to local storage.

export { localSave, localLoad, checkSave };

// Check the bottom of the main.ts file for more information on the above.
