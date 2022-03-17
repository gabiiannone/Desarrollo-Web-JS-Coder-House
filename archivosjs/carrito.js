//Metodo Ready
$(()=>{
    // 1 Esconde el carrito
    $("#cart-items").slideUp();
    // 2 Cuando hacemos click en la canasta se abre o cierra el carrito
    $(".cart").on("click", function(){
        $("#cart-items").slideToggle();
    })
    // 3 En click de cada producto agregamos el carrito
    $(".item").on("click", function(){
        $("#cart-items").slideDown();

        //Busco los datos que necesito
        let name = $(this).find("h3").text();
        let precio = parseFloat($(this).find(".price").text());

        $("#list-item").append(
            `
              <li>${name} - $<span class="eachPrice">${precio}</span>
                  <button class="remove">Limpiar</button>
              </li>
            `
        )

        itemsCarrito();
        precioTotal();

         //Borrar items del carrito

        $(".remove").on("click",function(){
            $(this).parent().remove();
            itemsCarrito();
            precioTotal();
        }) 



    })
    // 4 Agregar el numero de items

        const itemsCarrito = ()=>{
            $("#items-basket").text(`(${$("#list-item").children().length})`);


        }
    // 5 sacar el precio total de la compra

        const precioTotal = ()=>{
            let totalPrice = 0;
            $(".eachPrice").each(function(){
                let precioItem = parseFloat($(this).text());
                totalPrice += precioItem; 
            });

            $("#total-price").text(`$${totalPrice}`);


        }

    // 6 Mensaje al finalizar compra
   
        const comprarButton = document.querySelector(`.remove`);
        comprarButton.addEventListener(`click`, () => alert(`GRACIAS POR TU COMPRA!! Que lo disfrutes!!`));
})









