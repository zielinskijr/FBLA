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
        window.location.href = "/adopt.html"
    }
}

function save(item) {
    localStorage.setItem(item, JSON.stringify(state));
}