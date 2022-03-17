
//boton para registrarse
let titulo = document.createElement("h1");
titulo.setAttribute("id","nuevo elemento");
titulo.innerHTML = "<strong>REGISTRATE</strong>";
console.log(titulo);
titulo.style.color = "rgb(61, 124, 110)";

document.getElementById("registro").appendChild(titulo);






//creacion y registro de cuenta en la pagina

class guardarClientes {
    constructor (nombreYapellido,dni,direccion,ciudad,nacimiento,mail,usuario,contrasenia) {
        this.nombreYapellido = nombreYapellido;
        this.dni = dni;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.nacimiento = nacimiento;
        this.mail = mail;
        this.usuario = usuario;
        this.contrasenia = contrasenia;

    }

}

//se completan los datos y se guarda en el local storage
const crearCuenta = ()=>{
    let nombreYapellido = document.getElementById("nombre y apellido").value;
    let dni = parseInt(document.getElementById("dni")).value;
    let direccion = document.getElementById("direccion").value;
    let ciudad = document.getElementById("ciudad").value;
    let nacimiento = parseInt(document.getElementById("anio de nacimiento")).value;
    let mail = document.getElementById("mail").value;  
    let usuario = document.getElementById("nombre de usuario").value; 
    let contrasenia = document.getElementById("contrasenia").value; 

    let nuevoCliente= new guardarClientes(nombreYapellido,dni,direccion,ciudad,nacimiento,mail,usuario,contrasenia);
    const clienteJSON = JSON.stringify(nuevoCliente);
    localStorage.setItem("clientes", clienteJSON);
    
    
    
    return nuevoCliente;
    
    
    

}


//para verificar el usuario en el local storage

function obtener_localstorage(){

    if (localStorage.getItem("nombre")){

        let nombre = localStorage.getItem("nombre");
        let persona = JSON.parse( localStorage.getItem("persona"));
        console.log(nombre);
        console.log(persona);

    } else{
        console.log("Usuario no registrado");
    }




}

//boton para enviar datos

const btn = document.querySelector("#enviar");

btn.onclick = (e)=>{
    e.preventDefault(e);

    console.log("Cliente registrado");
  

}






