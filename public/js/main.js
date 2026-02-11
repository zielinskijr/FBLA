import { renderDom } from "./render.js";
import { try_death } from "./actions.js";
import { load, save, state, info } from "./data.js";

load();
renderDom();

const main_loop = setInterval(() => {
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
        if (!document.getElementById("hungry")) {
            let hungry = document.createElement("p");
            hungry.id = "hungry";
            hungry.innerHTML = info.nickname + " is hungry!";
            document.getElementById("stats").appendChild(hungry);
        } else {
            try_death()
        }
    }

    if (state.mood > 0) {
        if (Math.floor(Math.random() * 5) == 3) {
            state.mood -= 1
        }
    } else {
        if (!document.getElementById("depressed")) {
            let sad = document.createElement("p");
            sad.id = "depressed";
            sad.innerHTML = info.nickname + " is depressed!";
            document.getElementById("stats").appendChild(sad);
        } else {
            try_death()
        }
    }

    renderDom();
    save("state");
}, 1000);
