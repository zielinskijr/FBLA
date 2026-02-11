import { state, save } from "./data.js";
import { renderDom } from "./render.js";
export { feed, play, try_death };

function feed() {
    state.hunger += 1;
    state.mood += 0.5;

    renderDom();
    save("state");
}

function play() {
    state.mood += 1;

    renderDom();
    save("state");
}

function try_death() {
    if (Math.floor(Math.random() * 4) == 2) {
        clearInterval(main_loop);
    }
}

window.feed = feed;
window.play = play;
