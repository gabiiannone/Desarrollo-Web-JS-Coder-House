//Ingreso de Usuario

const usuario = document.getElementById("name");
const email = document.getElementById("email");
const contraseña = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if (usuario.value.length < 6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;

    }
    
    if (!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if (contraseña.value.length < 8){
        warnings += `La contraseña no es valida <br>`;
        entrar = true;
    }
    if (entrar){
        
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
})
//Se guarda usuario y contraseña

localStorage.setItem("usuario",usuario);
localStorage.setItem("usuario",JSON.stringify(usuario));
console.log(localStorage.getItem("usuario"));
let usuarioGuardado = localStorage.getItem("usuario");

console.log(JSON.parse(localStorage.getItem("usuario")));


localStorage.setItem("password",contraseña);
localStorage.setItem("password",JSON.stringify(contraseña));
console.log(localStorage.getItem("password"));
let passwordGuardado = localStorage.getItem("password");

console.log(JSON.parse(localStorage.getItem("password")));