import { state } from "./data.js"
import { renderWarning, removeWarning } from "./render.js"
export { handleTicks, handleWarnings }

let pet;

function handleTicks() {
  if (!state.dead == true) {
      if (state.hour >= 24) {
          state.hour = 0;
          state.day += 1;
          state.money += 10;
          state.earnedMoney += 10;
      } else {
          state.hour += 1;
      }

      if (state.hunger < 10) {
          if (Math.floor(Math.random() * 5) == 3) {
              state.hunger += 1;
          }
      }

      if (state.mood > 0) {
          if (Math.floor(Math.random() * 5) == state.key) {
              state.mood -= 1;
          }
      }

      if (state.in_bed == false) {
          if (state.sleep < 10) {
              state.sleep += 0.25;
          }
      } else {
          if (state.sleep > 0) {
              state.sleep -= 0.5;
              if (state.sleep < 0) {
                  state.sleep = 0;
                  state.in_bed = false;
              }
          }
      }

      if (state.influenza != true) {
          if (Math.floor(Math.random() * 20) == state.key) {
              state.influenza = true;
          }
      }
}
}

function handleWarnings() {
  pet = document.getElementById("pet-img");

  if (state.hunger >= 7 && !(state.hunger == 10)) {
    renderWarning("hungry", 0)
    pet.classList.add("hungry")
  } else if (!(state.hunger == 10)) {
    removeWarning("hungry")
    pet.classList.remove("hungry")
    state.hungryTicks = 0
  } else {
    renderWarning("hungry", 1)
    state.hungry = true
    state.hungryTicks += 1
    handleDeath("hungry")
  }

  if (state.mood < 4 && !(state.mood == 0)) {
    renderWarning("depressed", 0)
    pet.classList.add("depressed")
    pet.classList.remove("happy")
  } else if (!(state.mood == 0)) {
    removeWarning("depressed")
    pet.classList.remove("depressed")
    pet.classList.add("happy")
    state.depressedTicks = 0
  } else {
    renderWarning("depressed", 1)
    state.depressed = true
    state.depressedTicks += 1
    handleDeath("depressed")
  }

  if (state.sleep >= 7 && !(state.sleep == 10)) {
    renderWarning("sleepy", 0)
    pet.classList.add("tired")
  } else if (!(state.sleep == 10)) {
    removeWarning("sleepy")
    pet.classList.remove("tired")
    state.sleepyTicks = 0
  } else {
    renderWarning("sleepy", 1)
    state.sleepy = true
    state.sleepyTicks += 1
    handleDeath("sleepy")
  }

  if (state.influenza == true) {
    renderWarning("sick", 1)
    pet.classList.add("sick")
    state.sickTicks += 1
    handleDeath("sick")
  } else {
    removeWarning("sick")
    pet.classList.remove("sick")
    state.sickTicks = 0
  }
}
