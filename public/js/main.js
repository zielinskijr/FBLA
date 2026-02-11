import { renderDom } from "./render.js";
import { feed, play } from "./actions.js";
import { load, save, state, info } from "./data.js";

load();
renderDom();

const main_loop = setInterval(() => {
    if (state.time >= 24) {
        state.time = 0;
    } else {
        state.time += 1;
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
            if (Math.floor(Math.random() * 4) == 2) {
                clearInterval(main_loop);
            }
        }
    }

    renderDom();
    save("state");
}, 1000);
