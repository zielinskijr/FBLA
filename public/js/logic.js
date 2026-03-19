import { renderWarning, removeWarning, renderBadge } from "./render.js"
import { handleDeath } from "./death.js"
import { state } from "./data.js"
export { handleTicks, handleWarnings, pet }

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
              state.sleep -= 0.75;
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


  if (state.hunger == 10) {
    pet.classList.add("hungry")
    state.hungryTicks += 1
    renderWarning("hungry", 1)
    handleDeath("hungry")
  } else if (state.hunger >= 7) {
    pet.classList.add("hungry")
    renderBadge("🌮")
    renderWarning("hungry", 0)
  } else {
    removeWarning("hungry")
    pet.classList.remove("hungry")
    state.hungryTicks = 0
  }

  if (state.sleep == 10) {
    renderWarning("sleepy", 1)
    state.sleepyTicks += 1
    handleDeath("sleepy")
  } if (state.sleep >= 7) {
    renderWarning("sleepy", 0)
    renderBadge("🥱")
    pet.classList.add("tired")
  } else {
    removeWarning("sleepy")
    pet.classList.remove("tired")
    state.sleepyTicks = 0
  }

  if (state.mood == 0) {
    renderWarning("depressed", 1)
    state.depressedTicks += 1
    handleDeath("depressed")
  } else if (state.mood <= 3) {
    renderWarning("depressed", 0)
    renderBadge("💔")
    pet.classList.remove("happy")
    pet.classList.add("depressed")
  } else {
    removeWarning("depressed")
    pet.classList.remove("depressed")
    pet.classList.add("happy")
    renderBadge("😀")
    state.depressedTicks = 0
  }

  if (state.influenza == true) {
    renderWarning("sick", 1)
    renderBadge("🤒")
    pet.classList.add("sick")
    state.sickTicks += 1
    handleDeath("sick")
  } else {
    removeWarning("sick")
    pet.classList.remove("sick")
    state.sickTicks = 0
  }
}
