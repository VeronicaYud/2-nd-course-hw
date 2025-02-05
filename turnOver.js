function turnOver() {
    const textUser = prompt("Введите текст",);
    let text = textUser.split("").reverse().join("");
    alert(text);
}