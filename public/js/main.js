import { renderDom, renderWarning, death } from "./render.js";
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

        if (state.hunger > 0) {
            if (Math.floor(Math.random() * 5) == 3) {
                state.hunger -= 1
            }
        } else {
            renderWarning("hungry")
        }

        if (state.mood > 0) {
            if (Math.floor(Math.random() * 5) == 3) {
                state.mood -= 1
            }
        } else {
            renderWarning("depressed")
        }

        if (state.sleep > 0) {
            state.sleep -= 0.5
        } else {
            renderWarning("tired")
        }

        renderDom();
        save("state");
    } else {
        clearInterval("main_loop");
        death()
    }
}, 1000);

