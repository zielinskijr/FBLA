import { state } from "./vars.js";
import { dom } from "./vars.js";
import { setupListeners } from "./listeners.js";

// Check the top of the main.ts file for information on the above!

window.addEventListener("DOMContentLoaded", () => {
  setupListeners();
});

// This sets up an evenet listener to check when the page is loaded.
// When the page gets loaded, it runs `setupListeners` which sets up the event listeners for the buttons on the page.

function saveInput() {
  const typeInput = document.querySelector(
    'input[name="type"]:checked',
  ) as HTMLInputElement;
  state.type = typeInput?.value;
  const genderInput = document.querySelector(
    'input[name="gender"]:checked',
  ) as HTMLInputElement;
  state.gender = genderInput?.value;
  const nicknameInput = document.querySelector(
    'input[name="nickname"]',
  ) as HTMLInputElement;
  state.nickname = nicknameInput?.value;

  // The above checks the input of the boxes on the adopt page and loads them into variables.

  localStorage.setItem("localNick", state.nickname);
  localStorage.setItem("localGen", state.gender);
  localStorage.setItem("localType", state.type);

  // The above sets the variables into the local storage for use later.

  if (
    state.type == undefined ||
    state.gender == undefined ||
    state.nickname == undefined
  ) {
    if (dom.errortext) {
      dom.errortext.removeAttribute("hidden");
    }

    // If any of the feilds are undefined, it will throw an error saying to fill all the boxes in.
  } else {
    localStorage.setItem("isAdopted", "True");
    document.location.href = "/";
  }

  // If there was not any errors, this will set the isAdopted value in local storage to True
  // This will also redirect you to the main page allowing for you to interact with the pet.
}

export { saveInput };
