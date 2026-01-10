import { feed, play, bed, hospital, therapy } from "./actions.js";
import { localSave, localLoad } from "./storage.js";
import { btn, dom, state } from "./vars.js";
import { saveInput } from "./adopt.js";

// Check the top of the main.ts for more information on the above!

function setupListeners() {
  btn.feed?.addEventListener("click", feed);
  btn.play?.addEventListener("click", play);
  btn.bed?.addEventListener("click", bed);
  btn.hospital?.addEventListener("click", hospital);
  btn.therapy?.addEventListener("click", therapy);
  btn.save?.addEventListener("click", localSave);
  btn.load?.addEventListener("click", localLoad);
  btn.sub?.addEventListener("click", saveInput);

  dom.speed?.addEventListener("change", () => {
    if (dom.speed) {
      state.tickSpeed = Number(dom.speed.value);
    }
  });

}

// The above sets up an event listener for every button possible on the site.
// It checks if it was clicked and if it was, it will run the corresponding function.

export { setupListeners };

// Check the bottom of the main.ts file for more information on the above!
