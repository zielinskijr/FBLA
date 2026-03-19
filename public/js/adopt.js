function saveInput() {
    const info = {
        type: document.getElementById("type")?.value,
        owner: document.getElementById("owner")?.value,
        nickname: document.getElementById("name")?.value,
    };
    localStorage.setItem("info", JSON.stringify(info));

    if (info.type == "" || info.nickname == "" || info.owner == "") {
        document.getElementById("error-text").removeAttribute("hidden");
    } else {
        window.location.href = "/";
    }
}

window.saveInput = saveInput;
