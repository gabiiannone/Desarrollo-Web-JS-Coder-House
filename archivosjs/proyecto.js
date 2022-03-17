
//carga de productos GARDEN macetas

class Garden {
    constructor(linea, clasificacion, nombre, precio) {
        this.linea = linea;
        this.clasificacion = clasificacion;
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;

    }

    vendido(){
        this.vendido = true;
    }
}       

const gardenProductos = [];

gardenProductos.push(new Garden("macetas", "fibra de vidrio", "rotomoldeado",  "5900"));
gardenProductos.push(new Garden("macetas", "fibra de vidrio", "de diseño 40X40", "5300"));
gardenProductos.push(new Garden("macetas", "fibra de vidrio", "de diseño 35X50", "7990"));
gardenProductos.push(new Garden("macetas", "fibrocemento", "blanco/negras/natural", "4900"));
gardenProductos.push(new Garden("macetas", "plastico", "con pie de madera", "2790"));
gardenProductos.push(new Garden("macetas", "plastico", "con pie de hierro", "4100"));

//console.log(gardenProductos);
//console.log(gardenProductos.length);


for (const producto of gardenProductos) {
    console.log(`Linea: ${producto.linea}`);
    console.log(`Clasificacion: ${producto.clasificacion}`);
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: ${producto.precio}`);
}
const enJSON = JSON.stringify(gardenProductos);
localStorage.setItem("lista Garden 1", enJSON);




//localStorage.getItem("lista Garden");
//localStorage.setItem(JSON.stringify(gardenProductos));



localStorage.getItem(JSON.stringify(gardenProductos));
//console.log(localStorage.getItem(JSON.stringify(gardenProductos)));



// Que el usuario busque un articulo y agregue al carrito

function buscar(nombre) {

    const dato = gardenProductos.find(e => e.title == nombre);
    console.log(dato);
    let comprar = confirm(`elegiste el ${dato.linea.clasificacion.nombre}, lo queres comprar?`);
    console.log(comprar);
    If(comprar); {
        sessionStorage.setItem("carrito", JSON.stringify(dato));
        console.log(`Agregaste el ${dato.clasificacion.nombre} al carrito, su precio es de ${dato.precio}`);
    }
}


//carga de productos GARDEN plantas-suculentas

class Garden2 {
    constructor(linea, clasificacion, nombre, precio) {
        this.linea = linea;
        this.clasificacion = clasificacion;
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;

    }

    vendido(){
        this.vendido = true;
    }
}       

const gardenProductos2 = [];

gardenProductos2.push(new Garden2("plantas", "interior", "strelitzia",  "4500"));
gardenProductos2.push(new Garden2("plantas", "interior", "strelitzia nicolai",  "5500"));
gardenProductos2.push(new Garden2("plantas", "interior", "stromanthe",  "2000"));
gardenProductos2.push(new Garden2("plantas", "interior", "lazo de amor",  "600"));
gardenProductos2.push(new Garden2("plantas", "interior", "ficus",  "7100"));
gardenProductos2.push(new Garden2("plantas", "interior", "monstera",  "4800"));
gardenProductos2.push(new Garden2("plantas", "exterior", "washingtonia",  "3900"));
gardenProductos2.push(new Garden2("plantas", "exterior", "palmera cyca",  "5000"));
gardenProductos2.push(new Garden2("plantas", "exterior", "palmera pindo",  "3900"));
gardenProductos2.push(new Garden2("plantas", "suculentas", "graptopetalum",  "150"));
gardenProductos2.push(new Garden2("plantas", "suculentas", "echeveria",  "150"));
gardenProductos2.push(new Garden2("plantas", "suculentas", "aeonium",  "150"));


for (const producto2 of gardenProductos2) {
    console.log(`Linea: ${producto2.linea}`);
    console.log(`Clasificacion: ${producto2.clasificacion}`);
    console.log(`Nombre: ${producto2.nombre}`);
    console.log(`Precio: ${producto2.precio}`);
}
const enJSON2 = JSON.stringify(gardenProductos2);
localStorage.setItem("lista Garden 2", enJSON2);

localStorage.getItem(JSON.stringify(gardenProductos2));



//carga de productos GARDEN combos

class Combos {
    constructor(linea, clasificacion, nombre, precio) {
        this.linea = linea;
        this.clasificacion = clasificacion;
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;

    }

    vendido(){
        this.vendido = true;
    }
}       

const gardenProductos3 = [];

gardenProductos3.push(new Combos("combos", "combo1", "suculentas",  "1500"));
gardenProductos3.push(new Combos("combos", "combo2", "maceta fibrocemento + planta",  "9500"));
gardenProductos3.push(new Combos("combos", "combo3", "completo estilo nordico",  "3500"));


for (const producto3 of gardenProductos3) {
    console.log(`Linea: ${producto3.linea}`);
    console.log(`Clasificacion: ${producto3.clasificacion}`);
    console.log(`Nombre: ${producto3.nombre}`);
    console.log(`Precio: ${producto3.precio}`);
}
const enJSON3 = JSON.stringify(gardenProductos3);
localStorage.setItem("lista Garden 3", enJSON3);

localStorage.getItem(JSON.stringify(gardenProductos3));






