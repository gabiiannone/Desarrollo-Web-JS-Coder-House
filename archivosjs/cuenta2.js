
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

let listaUsuarios = []

//se completan los datos y se guarda en el local storage
const crearCuenta = ()=>{
    const nombreYapellido = document.getElementById("#nombre y apellido").value;
    const dni = parseInt(document.getElementById("#dni")).value;
    const direccion = document.getElementById("#direccion").value;
    const ciudad = document.getElementById("#ciudad").value;
    const nacimiento = parseInt(document.getElementById("#anio de nacimiento")).value;
    const mail = document.getElementById("#mail").value;  
    const usuario = document.getElementById("#nombre de usuario").value; 
    const contrasenia = document.getElementById("#contrasenia").value; 

    const nuevoCliente= new guardarClientes(nombreYapellido,dni,direccion,ciudad,nacimiento,mail,usuario,contrasenia);
    console.log(nuevoCliente);

    let lista;
    if(localStorage.getItem("listaUsuarios") != null) {
        lista = JSON.parse(localStorage.getItem("listaUsuarios"));
        lista.push(nuevoCliente)
        localStorage.setItem("listaUsuarios",JSON.stringify(lista))
    }
    listaUsuarios.push(nuevoCliente)
    return nuevoCliente;


}

//verifiquemos Storage
const verificarStorage = () => {
    let dato = [];
    if (localStorage.getItem("listaUsuarios") != null) {
        dato = JSON.parse(localStorage.getItem("listaUsuarios"));
        return dato;
    } 
}

//agregamos usuario
 const agregarUsuarioLista = (lista) => {
     lista.push(crearCuenta());
     console.log(listaUsuarios);
     return lista;
 }


//guardamos
const guardar = ()=> {
    crearCuenta()
    if(verificarStorage() != undefined) {
        localStorage.setItem("listaUsuarios",JSON.stringify(verificarStorage()));
    } else {
        localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios));
    }
}

//boton para enviar datos

const btn = document.querySelector("#enviar");

btn.onclick = (e)=>{
    e.preventDefault(e);

    console.log("Cliente registrado");

}

