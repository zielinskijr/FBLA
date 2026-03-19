import { renderEnd, renderPet } from "./render.js"
import { load, state } from "./data.js"

load()

if (state.day >= 7) {
  renderPet()
  renderEnd()
} else {
  window.location.href = "/"
}
