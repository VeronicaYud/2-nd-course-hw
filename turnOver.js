function turnOver() {
    const textUser = prompt("Введите текст", "ввод");
    let text = textUser.split("").reverse().join("");
    alert(text);
}