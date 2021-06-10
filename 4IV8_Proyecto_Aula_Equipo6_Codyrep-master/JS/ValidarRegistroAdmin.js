var usuario = document.getElementById('Usuario');
var contrasenia = document.getElementById('Contrasenia');
var textoerror = '';
var error;

function ValidarRegistro(){
    console.log('Validando...');
    
    
    if(usuario.value == null || usuario.value == ''){
        textoerror = textoerror + 'Ingresa tu Usuario, ';
        error = true;
    }else if(usuario.value.length >10){
        textoerror = textoerror + 'El usuario no puede tener más de 10 caracteres, ';
        error = true;
    }
    if(contrasenia.value === null || contrasenia.value === ''){
        textoerror = textoerror + 'Ingresa tu Contraseña, ';
        error = true;
    }

    if(error){
        Alertam();
    }else{
        Alertab();
    }
    
    return false;
}

function Alertam(){
    Swal.fire({
        title: 'Advertencia',
        text: textoerror,
        icon: 'error',
        timer: 3000,
        timerProgressBar: true,
        allowOutsideClick: false,
        confirmButtonText: 'Aceptar'
    })
    textoerror= '';
    error = false;
}

function Alertab(){
    Swal.fire({
        title: 'Bienvenido',
        text: 'Sesión iniciada correctamente',
        icon: 'success',
        timer:1000,
        timerProgressBar: true,
        allowOutsideClick: false,
        confirmButtonText: 'Aceptar'
    })
    textoerror= '';
    error = false;
}