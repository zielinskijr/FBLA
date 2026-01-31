import { renderDom } from './render.js';
import { feed, play } from './actions.js'
import { load, state } from './data.js'

load()
renderDom()

const main_loop = setInterval(() => {
    
    if (state.time >= 24) {
        state.time = 0;
    } else {
        state.time += 1;
    }

    renderDom()
}, 1000);