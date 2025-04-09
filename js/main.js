let nombre= document.getElementById ("txtNombre");
let btnGuardar= document.getElementById("btnGuardar");


btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    nombre.value= nombre.value.trim();
    if(nombre.value){
        localStorage.setItem("Nombre", nombre.value);
    }
    });


