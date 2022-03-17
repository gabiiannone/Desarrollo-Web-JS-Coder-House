class Home {
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

const homeProductos = [];

homeProductos.push(new Home("home", "alfombras", "Hindu 60x98",  "3800"));
homeProductos.push(new Home("home", "alfombras", "Cañas azulinas 60x98",  "3800"));
homeProductos.push(new Home("home", "alfombras", "Flechas arena 60x98",  "3800"));
homeProductos.push(new Home("home", "alfombras", "Calcarea Azulina 60x98",  "3800"));
homeProductos.push(new Home("home", "alfombras", "Acqua 60x98",  "3800"));
homeProductos.push(new Home("home", "alfombras", "Mundo 60x98",  "3800"));
homeProductos.push(new Home("home", "alfombras", "Gris fondo vison 98x98",  "6300"));
homeProductos.push(new Home("home", "alfombras", "Hindu 98x98",  "6300"));
homeProductos.push(new Home("home", "alfombras", "Rosa 98x98",  "6300"));
homeProductos.push(new Home("home", "alfombras", "Hojas vison 98x198",  "12500"));
homeProductos.push(new Home("home", "alfombras", "Calcarea gris 98x198",  "12500"));
homeProductos.push(new Home("home", "alfombras", "Hindu 98x198",  "12500"));
homeProductos.push(new Home("home", "difusores y velas", "Difusor grande opaco",  "3400"));
homeProductos.push(new Home("home", "difusores y velas", "Difusor Cristal",  "3400"));
homeProductos.push(new Home("home", "difusores y velas", "Difusor Ceramica",  "3400"));
homeProductos.push(new Home("home", "difusores y velas", "Vela cuenco madera",  "1450"));
homeProductos.push(new Home("home", "difusores y velas", "Vela cuenco madera 2",  "1450"));
homeProductos.push(new Home("home", "difusores y velas", "Vela cuenco madera 3 pabilos",  "2300"));
homeProductos.push(new Home("home", "difusores y velas", "Vela Bombe cristal",  "1900"));
homeProductos.push(new Home("home", "difusores y velas", "Fusta de 4 Velas",  "1450"));
homeProductos.push(new Home("home", "difusores y velas", "Repuesto de difusores",  "1580"));
homeProductos.push(new Home("home", "deco", "Espejo de Rafia negro",  "4900"));
homeProductos.push(new Home("home", "deco", "Espejo de Rafia gris",  "4900"));
homeProductos.push(new Home("home", "deco", "Reloj enchapado blanco",  "2600"));
homeProductos.push(new Home("home", "deco", "Manta nido de abeja uva claro",  "7900"));
homeProductos.push(new Home("home", "deco", "Manta de gasa uva",  "6800"));
homeProductos.push(new Home("home", "deco", "Mantel de Gasa",  "2600"));


for (const producto4 of homeProductos) {
    console.log(`Linea: ${producto4.linea}`);
    console.log(`Clasificacion: ${producto4.clasificacion}`);
    console.log(`Nombre: ${producto4.nombre}`);
    console.log(`Precio: ${producto4.precio}`);
}
const enJSON4 = JSON.stringify(homeProductos);
localStorage.setItem("lista Home", enJSON4);

localStorage.getItem(JSON.stringify(homeProductos));



