
const d = document

const $aside = d.getElementById("aside")
const $botonDesplegar = d.getElementById("boton")
$botonDesplegar.addEventListener("click", () => {
    $aside.classList.toggle("desplegar");
    $botonDesplegar.classList.toggle("is-active");
})

