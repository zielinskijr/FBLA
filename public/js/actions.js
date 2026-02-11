import { state, save } from "./data.js";
import { renderDom, death } from "./render.js";
import { main_loop } from "./main.js"
export { feed, play, bed, try_death };

function feed() {
    state.hunger -= 1;
    state.mood += 0.5;

    renderDom();
    save("state");
}

function play() {
    state.mood += 1;

    renderDom();
    save("state");
}

function bed() {
    if (state.in_bed == true) {
        state.in_bed = false
    } else {
        state.in_bed = true
    }
}

function try_death() {
    if (Math.floor(Math.random() * 4) == 2) {
        clearInterval(main_loop);
        death()
    }
}

window.feed = feed;
window.play = play;
window.bed = bed;
