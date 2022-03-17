//Defino las variables correspondientes

let curso_1 = new Array ("_", "Sab 17 de Abril 11Hs", "Mie 26 de Mayo 15Hs", "Sab 12 de Junio 11Hs");
let curso_2 = new Array ("_", "Sab 10 de Abril 11Hs", "Sab 8 de Mayo 11Hs", "Mie 9 de Junio 11Hs");
let curso_3 = new Array ("_", "Sab 24 de Abril 11Hs", "Mie 19 de Mayo 15Hs", "Sab 26 de Junio 11Hs");

//Creo la funcion que permita ejecutar el cambio dinamico

function cambio (){

    let curso;
    curso = document.cursos.curso[document.cursos.curso.selectedIndex].value;

    if (curso !=0){
        mis_cursos = eval("curso_" + curso);
        num_cursos = mis_cursos.length;
        document.cursos.fechas.length = num_cursos;
        //para cada opcion del array la pongo en el select
        for(i=0; i<num_cursos; i++){
            document.cursos.fechas.options[i].value=mis_cursos[i];
            document.cursos.fechas.options[i].text=mis_cursos[i];
        }
        }else{
            //si no habia ninguna opcion seleccionada; elimino la fecha del select
            document.cursos.fechas.length = 1;
            document.cursos.fechas.options[0].value = "_";
            document.cursos.fechas.options[0].text = "_";

        }
        document.cursos.fechas.options[0].selected = true;

    
}


const $form = document.querySelector(`#form1`)
const $buttonMail = document.querySelector(`#valiMail`)

	$form.addEventListener(`submit`, enviarMessage)


	function enviarMessage(event) {
		event.preventDefault()
		const form = new FormData(this)
		console.log(form.get(`apellido`))
        console.log(form.get(`nombre`))
		console.log(form.get(`email`))
        console.log(form.get(`curso`))
        console.log(form.get(`fechas`))
		$buttonMail.setAttribute(`href`, `mailto:succugardenhome@gmail.com?subject= apellido ${form.get(`apellido`)} nombre ${form.get(`nombre`)} correo ${form.get(`email`)}=&body= ${form.get(`curso`)}=&body=${form.get(`fechas`)}`)
		$buttonMail.click()
        

	}

    const inscripcionButton = document.querySelector(`.remove`);
    inscripcionButton.addEventListener(`click`, () => alert(`Te inscribiste en el curso!! TE ESPERAMOS!!`));

