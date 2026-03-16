import { renderDom, renderWarning, removeWarning, death } from "./render.js";
import { load, save, state, info } from "./data.js";
export { main_loop };

let main_loop = null;

status = load();

if (status == "OK") {
    renderDom();
} else {
    window.location.href = "/adopt.html";
}

if (state.dead == true) {
    death();
} else {
    const main_loop = setInterval(() => {
        if (!state.dead == true) {
            if (state.hour >= 24) {
                state.hour = 0;
                state.day += 1;
                state.money += 10;
            } else {
                state.hour += 1;
            }

            if (state.hunger < 10) {
                if (Math.floor(Math.random() * 5) == 3) {
                    state.hunger += 1;
                }
            } else {
                renderWarning("hungry");
            }

            if (state.mood > 0) {
                if (Math.floor(Math.random() * 5) == state.key) {
                    state.mood -= 1;
                }
            } else {
                renderWarning("depressed");
            }

            if (state.in_bed == false) {
                if (state.sleep < 10) {
                    state.sleep += 0.25;
                } else {
                    renderWarning("tired");
                }
            } else {
                if (state.sleep > 0) {
                    state.sleep -= 0.5;
                    removeWarning("tired");
                } else {
                    state.in_bed = false;
                }
            }

            if (state.influenza != true) {
                if (Math.floor(Math.random() * 10) == state.key) {
                    state.influenza = true;
                    renderWarning("sick");
                }
            }

            renderDom();
            save("state");
        } else {
            if (state.dead != true) {
                clearInterval("main_loop");
                death();
                console.log(state.dead);
            }
        }
    }, 1500);
}
