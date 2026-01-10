import { state, dom } from "./vars.js";

function tickStats() {
  if (state.hunger < 10) {
    if (state.in_bed == false) {
      state.hunger += 1;
    }
  } else {
    state.sick == true;
  }

  if (state.sleep < 10) {
    if (state.in_bed == false) {
      state.sleep += 1;
    }
  } else {
    state.sick = true;
  }

  if (state.mood > 0) {
    if (state.in_bed == false) {
      state.mood -= 0.5;
    }
  } else {
    state.depressed = true;
  }

  if (state.in_bed == true) {
    if (state.sleep > 0) {
      state.sleep -= 1;
    } else {
      state.in_bed = false;
    }
  }
}

function checkWarnings() {
  if (state.sick == true) {
    if (dom.unhealthy) {
      dom.unhealthy.removeAttribute("hidden");
    }
  } else {
    if (dom.unhealthy) {
        dom.unhealthy.setAttribute("hidden", "");
    }
  }

  if (state.sleep == 0) {
    if (dom.tired) {
      dom.tired.removeAttribute("hidden");
    } 
  } else {
        if (dom.tired) {
            dom.tired.setAttribute("hidden", "");
        }
    }

  if (state.depressed == true) {
    if (dom.depressed) {
      dom.depressed.removeAttribute("hidden");
    }
  } else {
    if (dom.depressed) {
        dom.depressed.setAttribute("hidden", "");
    }
  }
}

export { tickStats, checkWarnings };
