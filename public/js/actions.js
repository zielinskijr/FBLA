import { state, save } from "./data.js";
import { renderDom, death, removeWarning } from "./render.js";
import { main_loop } from "./main.js";
export { feed, play, bed, try_death };

function feed() {
    if (state.hunger != 0 && state.hunger > 0) {
        state.hunger -= 1;
        state.mood += 0.5;
        removeWarning("hungry");
        if (state.hunger < 0) {
            state.hunger = 0;
        }
    }
    renderDom();
    save("state");
}

function play() {
    if (state.mood != 10 && state.mood < 10) {
        state.mood += 1;
        state.money -= 5;
        removeWarning("depressed");
        if (state.mood > 10) {
            state.mood = 10;
        }
    }

    renderDom();
    save("state");
}

function bed() {
    if (state.in_bed == true) {
        state.in_bed = false;
    } else {
        state.in_bed = true;
    }
}

function hospital() {
    if (state.influenza == true) {
        state.money -= Math.floor(Math.random() * 50);
        removeWarning("sick");
    }
}

function petShow() {
    let tempStats = state
    console.log(tempStats.hunger)
    console.log(tempStats.hunger - 3)
    console.log((tempStats.hunger + 3 <= 10) && (tempStats.sleep + 5 <= 10) && (tempStats.mood - 2.5 >= 1));

    if ((tempStats.hunger + 3 <= 10) && (tempStats.sleep + 5 <= 10) && (tempStats.mood - 2.5 >= 1)) {
        state.hunger += 3
        state.sleep += 5
        state.mood -= 2.5

        state.money += Math.floor(Math.random() * 100)
    }
}

function try_death(doDeath) {
    if ((doDeath = true)) {
        death();
    }
    if (Math.floor(Math.random() * 5) == state.key) {
        clearInterval(main_loop);
        death();
    }
}

window.feed = feed;
window.play = play;
window.bed = bed;
window.hospital = hospital;
window.petShow = petShow
window.try_death = try_death;
