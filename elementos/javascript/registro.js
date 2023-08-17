document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);


var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
} 

function exito(){
	alert("Registro exitoso")
}

/**
document.getElementById('btn__iniciar-sesion').addEventListener("click", iniciarSesion);
document.getElementById('btn__registrarse').addEventListener("click", register);

var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_posterior_login = document.querySelector(".caja__posterior-login");
var caja_posterior_register = document.querySelector(".caja__posterior-register");

var openModal = document.querySelector('.exito__r');
var modal = document.querySelector('.modal');

openModal.addEventListener('click', (e)=>{
        
        modal.classList.add('modal--show');
});


function register(){
	formulario_register.style.display = "block";
	contenedor_login_register.style.left ="410px";
	formulario_login.style.display ="none";
	caja_posterior_register.style.opacity ="0";
	caja_posterior_login.style.opacity ="1";
    }
function iniciarSesion(){
	formulario_register.style.display = "none";
	contenedor_login_register.style.left ="10px";
	formulario_login.style.display ="block";
	caja_posterior_register.style.opacity ="1";
	caja_posterior_login.style.opacity ="0";
	
}


function exito(){
	alert("Registro exitoso, ahora puedes disfrutar de la mejor musica")
}

**/

