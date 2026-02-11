import { renderDom, renderWarning, removeWarning, death } from "./render.js";
import { load, save, state, info } from "./data.js";
export { main_loop };

load();
renderDom();

const main_loop = setInterval(() => {
    if (!state.dead == true) {
        if (state.time >= 24) {
            state.time = 0;
        } else {
            state.time += 1;
        }

        if (state.hunger < 10) {
            if (Math.floor(Math.random() * 5) == 3) {
                state.hunger += 1
                removeWarning("hungry")
            }
        } else {
            renderWarning("hungry")
        }

        if (state.mood > 0) {
            if (Math.floor(Math.random() * 5) == 3) {
                state.mood -= 1
                removeWarning("depressed")
            }
        } else {
            renderWarning("depressed")
        }

        if (state.in_bed == false) {
            if (state.sleep < 10) {
                state.sleep += 0.25
                removeWarning("tired")
            } else {
                renderWarning("tired")
            }
        } else {
            if (state.sleep > 0) {
                state.sleep -= 0.5;
            } else {
                state.in_bed = false
            }
        }


        renderDom();
        save("state");
    } else {
        clearInterval("main_loop");
        death();
    }
}, 1500);

