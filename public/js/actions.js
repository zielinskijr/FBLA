import { state, save } from "./data.js";
import { renderDom } from "./render.js";
export { feed, play, bed, hospital, petShow };

function feed() {
  if (!(state.hunger <= 0)) {
      if (state.money - 5 > 0) {
        state.in_bed = false
        state.hunger -= 1;
        if (state.mood + 0.5 <= 10) {
            state.mood += 0.5;
        }
        state.money -= 5;
        state.spentMoney += 5;
      }
    }
    renderDom();
    save("state");
}

function play() {
    if (state.mood < 10) {
      if (state.money - 5 > 0) {
        state.in_bed = false
        state.mood += 1;
        state.money -= 5;
        state.spentMoney += 5;
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

    renderDom();
    save("state");
}

function hospital() {
    if (state.influenza == true) {
        let tempStats = state;
        let randomMoney = Math.floor(Math.random() * 50);
        if (tempStats.money - randomMoney > 0)  {
          state.in_bed = false
          state.money -= randomMoney;
          state.spentMoney += randomMoney;
          state.influenza = false
        }
    }

    renderDom();
    save("state");
}

function petShow() {
    let tempStats = state;

    if (tempStats.hunger + 3 <= 10 && tempStats.sleep + 5 <= 10 && tempStats.mood - 2.5 >= 1) {
        state.in_bed = false
        state.hunger += 3;
        state.sleep += 5;
        state.mood -= 2.5;

        let randomMoney = Math.floor(Math.random() * 201) + 50;

        state.money += randomMoney;
        state.earnedMoney += randomMoney;
    }

    renderDom();
    save("state");
}

window.feed = feed;
window.play = play;
window.bed = bed;
window.hospital = hospital;
window.petShow = petShow;
