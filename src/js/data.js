export { state, info, load, save };

let state;
let info;

function load() {
    var persist = localStorage.getItem("state");

    if (persist != null) {
        state = JSON.parse(persist);
    } else {
    state = {
        time: 7,
        hunger: 0,
        sleep: 0,
        mood: 10,
        money: 100,
        sick: false,
        depressed: false,
        in_bed: false,
    };
    }

    var persist = localStorage.getItem("info");
    if (persist != null) {
        info = JSON.parse(persist);
    } else {
        info = {
            type: null,
            gender: null,
            nick: null,
            url: null
        }
    }
}

function save() {
    localStorage.setItem("state", JSON.stringify(state));
}