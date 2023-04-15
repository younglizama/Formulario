var rut = document.getElementById('rut');
var nombre = document.getElementById('nombre');
var apellido_paterno = document.getElementById('apellido paterno');
var apellido_materno = document.getElementById('apellido_materno');
var fecha_nacimiento = document.getElementById('fecha_nacimiento');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var email = document.getElementById('email');
var celular = document.getElementById('celular');
var profesion = document.getElementById('profesion');
var comentario = document.getElementById('comentario');
var error = document.getElementById('error');
error.style.color = 'red';

var form = document.getElementById(formulario);
    form.addEventListener("submit", function(evt){
        evt.preventDefault();
        console.log('enviando formulario...');

    });
