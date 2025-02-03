/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

// Declaración de variables
const contenedor_login_register = document.querySelector(".contenedor__login-register");
const formulario_login = document.querySelector(".formulario__login");
const formulario_register = document.querySelector(".formulario__register");
const caja_trasera_login = document.querySelector(".caja__trasera-login");
const caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
} 

function register(){
    if(window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1"; 
    }
}

document.getElementById("cuadro__titulo").addEventListener("click", function() {
    const cuadroFormulario = document.querySelector('.cuadro__info .cuadro__formulario');
    cuadroFormulario.classList.toggle('show');
});


document.getElementById("btn__entrar").addEventListener("click", function() {
    const usuario = document.querySelector('#formulario__login input[name="usuario"]').value;
    const contrasena = document.querySelector('#formulario__login input[name="contrasena"]').value;

    // Validar el usuario y la contraseña
    if(usuario === "GemaJ" && contrasena === "18/03/2023") {
        // Redirigir a body.html
        window.location.href = "body.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

