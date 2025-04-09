let encabezado1= document.getElementsByTagName("h1").item(0);
let btnEliminar= document.getElementById("btnEliminar");


if (localStorage.getItem("Nombre")!=null){
let Nombre = localStorage.getItem("Nombre")
encabezado1.innerText= `Hola, ${Nombre}, bienvenid@ de nuevo`;
console.log(Nombre);
} else{
    encabezado1.innerText = `Por favor, ve al index e ingresa tu nombre.`
}

btnEliminar.addEventListener("click", function(){
    localStorage.removeItem ("Nombre");
});



