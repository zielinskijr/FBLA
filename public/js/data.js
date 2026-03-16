export { state, info, load, save };

let state;
let info;
let status;

function load() {
    var persist = localStorage.getItem("state");

    if (persist != null) {
        state = JSON.parse(persist);
        status = "OK"
    } else {
       status = "ADOPT"
        state = {
            time: 7,
            hunger: 0,
            sleep: 0,
            mood: 10,
            money: 100,
            dead: false,
            depressed: false,
            in_bed: false,
            dead: false
        };
    }

    var persist = localStorage.getItem("info");
    if (persist != null) {
        info = JSON.parse(persist);
        status = "OK"
    } else {
        status = "ADOPT"
    }
return status
}

function save(item) {
    localStorage.setItem(item, JSON.stringify(state));
}
