function saveInput() {
    const info = {
        type: document.querySelector('select')?.value,
        nickname: document.querySelector('input')?.value
    };
    localStorage.setItem("info", JSON.stringify(info));

    if (info.type == null || info.nickname == "") {
        document.getElementById("error-text").removeAttribute("hidden");
    } else {
        window.location.href = "/";
    }
}

window.saveInput = saveInput;
