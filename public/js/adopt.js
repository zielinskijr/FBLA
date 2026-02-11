function saveInput() {
    const info = {
        type: document.querySelector('input[name="type"]:checked')?.value,
        nickname: document.querySelector('input[name="nickname"]')?.value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
    };
    localStorage.setItem("info", JSON.stringify(info));

    if (info.type == null || info.nickname == "" || info.gender == null) {
        document.getElementById("error-text").removeAttribute("hidden");
    } else {
        window.location.href = "/";
    }
}

window.saveInput = saveInput;
