import { updateStats } from "./render.js";
import { state } from "./vars.js";

// Please read the top comment on the main.ts for information on the above!

function feed() {
  if (state.money >= 10 && state.hunger < 5) {
    if (state.in_bed == true) {
      state.in_bed = false;
    }
    state.money -= 5;
    state.hunger = 10;
    updateStats();
  }
}

// The above checks if it can be fed, and if it can it will remove 5 dollars and sets it's hunger to 10.

function bed() {
  if (state.in_bed == false) {
    state.in_bed = true;
  } else {
    state.in_bed = false;
  }
}

// The above sends the dog to sleep or takes it out of bed if needed.

function play() {
  if (state.money >= 5 && state.mood < 10) {
    if (state.in_bed == true) {
      state.in_bed = false;
    }
    state.money -= 5;
    state.mood = 10;
    updateStats();
  }
}

// The above checks if you can play with the dog, and if oyu can it will play.

function hospital() {
  if (state.sick == true) {
    state.money = state.money / 2
    state.sick = false;
  }
}

function therapy() {
  if (state.depressed == true) {
    state.money -= 10;
    state.depressed = false;
  }
}

export { feed, play, bed, hospital, therapy };

// Check the bottom of the main.ts file for more information about the above!
