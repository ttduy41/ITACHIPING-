function copyKey() {
    const keyCodeElement = document.getElementById("keyCode");
    const keyCode = keyCodeElement.innerText;
    navigator.clipboard.writeText(keyCode).then(() => {
        alert("Đã sao chép key!");
    });
}

function generateNewKey() {
    const newKey = generateRandomKey();
    const keyCodeElement = document.getElementById("keyCode");
    keyCodeElement.innerText = newKey;
}

function generateRandomKey() {
    const characters = "0123456789ABCDEF";
    let key = "";
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
    }
    return key;
}
