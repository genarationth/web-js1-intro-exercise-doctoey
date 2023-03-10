let ChangeName = () => {
    let name = prompt("What is your name?");
    document.getElementById("inputName").innerHTML = `Hello! I'm ${name}`
}