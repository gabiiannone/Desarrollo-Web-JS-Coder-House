$(document).ready(function(){

    $("#enviar").click(function(){
        $.get("mensaje.txt", function(dato, status, xhr){
            console.log("Mensaje: "+ dato + " Status: "+ status + " "+ xhr.status);

        })
    })
})






