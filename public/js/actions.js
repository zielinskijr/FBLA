import { state, save } from "./data.js";
import { renderDom, death, removeWarning } from "./render.js";
import { main_loop } from "./main.js";
export { feed, play, bed, handleDeath };

function feed() {
    if (state.hunger != 0 && state.hunger > 0) {
        state.hunger -= 1;
        state.mood += 0.5;
        if (state.mood >= 10) {
            state.mood = 10;
        }
        state.money -= 5;
        state.spentMoney += 5;
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
        state.hunger += 0.5;
        if (state.hunger <= 10) {
            state.hunger = 10;
        }
        state.money -= 5;
        state.spentMoney += 5;
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
        let tempStats = state;
        let randomMoney = Math.floor(Math.random() * 50);
        if (tempStats.money - randomMoney < 0) state.money -= randomMoney;
        state.spentMoney += randomMoney;
        state.influenza = false
    }
}

function petShow() {
    let tempStats = state;

    if (tempStats.hunger + 3 <= 10 && tempStats.sleep + 5 <= 10 && tempStats.mood - 2.5 >= 1) {
        state.hunger += 3;
        state.sleep += 5;
        state.mood -= 2.5;

        let randomMoney = Math.floor(Math.random() * 100);

        state.money += randomMoney;
        state.earnedMoney = randomMoney;
    }
}

function rollDeath() {
  if (Math.floor(Math.random() * 10) == state.key) {
    death()
  }
}

function handleDeath(state) {
  if (state == "hungry") {
    if (state.hungryTicks >= 3) {
      console.log(state.hungryTicks)
      rollDeath()
    }
  }
  if (state == "depressed") {
    if (state.depressedTicks >= 3) {
      console.log(state.depressedTicks)
      rollDeath()
    }
  }

  if (state == "sleepy") {
    if (state.sleepyTicks >= 3) {
      console.log(state.sleepyTicks)
      rollDeath()
    }
  }

  if (state == "sick") {
    if (state.sickTicks >= 3) {
      console.log(state.sickTicks)
      rollDeath()
    }
  }

}

window.feed = feed;
window.play = play;
window.bed = bed;
window.hospital = hospital;
window.petShow = petShow;
window.handleDeath = handleDeath
