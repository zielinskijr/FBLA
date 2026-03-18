import { renderDom, renderPet } from "./render.js";
import { load, save, state } from "./data.js";
import { death } from "./death.js"

let main_loop = null;
let status = load();

if (status == "OK") {
    renderPet();
    renderDom();
} else {
    window.location.href = "/tutorial.html";
}

if (state.dead == true) {
    death();
    pet.classList.add("dead");
} else {
    const main_loop = setInterval(() => {
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
            if (state.dead != true) {
                renderDom();
            }
            save("state");
        }
    }, 1500);
}
