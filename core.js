const cambioboton = document.getElementById("cambioboton");

function login(element) {
    if (element.innerText == "Logout") {
        element.innerText = "Login";
    } else {
        element.innerText = "Logout";
    }
}
const megusta = document.getElementById("megusta");

megusta.addEventListener("click", function() {
    this.innerText = "23 me gusta";
});
const megustados = document.getElementById("megustados");

megustados.addEventListener("click", function() {
    this.innerText = "46 me gusta";
});

function mostrarAlerta() {
    alert("se a dado me gusta");
}
function hide(el) {
    el.remove();
}