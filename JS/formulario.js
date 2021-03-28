function validar() {
    var nombre, apellidos, correo, telefono, mensaje, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("mensaje").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellidos ==="" || correo ==="" || telefono ==="" || mensaje ===""){
        alert("Campos obligatorios");
        return false;
    }
    else if(nombre.lengh>40) {
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellidos.lengh>100) {
        alert("Los apellidos son muy largos");
        return false;
    }
    else if(correo.lengh>80) {
        alert("El correo es muy largo");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo no existe");
        return false;
    }
    else if(telefono.lengh>10) {
        alert("El telefono debe tener 10 caracteres");
        return false;
    }
    else if(mensaje.lengh>500) {
        alert("El mensaje es muy largo");
        return false;
    }
    else if(isNaN(telefono)) {
        alert("Utilice caracteres numericos en el campo telefono");
        return false;
    }
}
