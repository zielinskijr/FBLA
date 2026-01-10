import { local, dom, urls, state } from "./vars.js"

function renderPet() {
  if (local.type == "dog") {
    if (dom.pet) {
      if (dom.pet instanceof HTMLImageElement) {
        dom.pet.src = urls.dog;
      }
    }
  } else if (local.type == "cat") {
    if (dom.pet) {
      if (dom.pet instanceof HTMLImageElement) {
        dom.pet.src = urls.cat;
      }
    }
  } else if (local.type == "seal") {
    if (dom.pet) {
      if (dom.pet instanceof HTMLImageElement) {
        dom.pet.src = urls.seal;
      }
    }
  }
  if (dom.name) {
    dom.name.innerHTML = local.nick || "";
  }
}

// The above just renders the picture and name of the pet to the screen.

function updateStats() {
  if (dom.time) {
    dom.time.innerHTML = "Time: " + state.time;
  }
  if (dom.hunger) {
    dom.hunger.innerHTML = "Hunger: " + state.hunger;
  }
  if (dom.mood) {
    dom.mood.innerHTML = "Happiness: " + state.mood;
  }
  if (dom.sleep) {
    dom.sleep.innerHTML = "Sleepiness: " + state.sleep;
  }
  if (dom.money) {
    dom.money.innerHTML = "Money: " + state.money;
  }
}

function renderDeath() {
    if (dom.pet) {
      if (dom.pet instanceof HTMLImageElement) {
        dom.pet.src = urls.skull;
      }

      if (dom.death) {
          dom.death.removeAttribute("hidden");
      }
  }
}

// The above renders the actual stats of the pet, it's money, sleepiness, happiness, hunger, and what time it is (in the game.)

export {renderPet, updateStats, renderDeath};