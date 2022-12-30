// modo oscuro
let botonDark=document.getElementById("botonDark");
let body=document.body;

botonDark.addEventListener("click", ()=>{
    let val=body.classList.toggle("modoDark")
    localStorage.setItem("botonDark",val)
})

let valor=localStorage.getItem("botonDark")

if (valor=="true") {
    body.classList.add("modoDark")
} else {
    body.classList.remove("modoDark")
}

//menuMobile
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const icon = document.querySelector('.iconos')
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    icon.classList.toggle('activar')
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});
