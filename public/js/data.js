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
            dead: false,
            depressed: false,
            in_bed: false,
        };
    }

    var persist = localStorage.getItem("info");
    if (persist != null) {
        info = JSON.parse(persist);
    } else {
        window.location.href = "/adopt.html";
    }

    if (info.type === "dog") {
        info.url = "/assets/img/dog.svg";
    } else if (info.type === "cat") {
        info.url = "/assets/img/cat.svg";
    } else if (info.type === "seal") {
        info.url = "/assets/img/seal.svg";
    }
}

function save(item) {
    localStorage.setItem(item, JSON.stringify(state));
}
