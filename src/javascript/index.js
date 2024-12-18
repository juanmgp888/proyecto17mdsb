$(document).ready(function() {
    // Presentar el listado de solicitudes. LISTAR.
    $("#listar").on("click", function() {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes", function(data) {
      //   $("#resListar").text("Ok");
      //   $("#detalle").hide(); // Me aseguro de que esté oculto.
      //   $("accionesDetalle").hide();

        $("#maestro").empty();  // Limpiar, por si cancelan y se duplica la visibilización
            console.log(data);

            data.forEach(function(solicitud) {
                $("#maestro").append(
                    $("<li>")
                        .text(solicitud.nombre + ' ' + solicitud.apellido)
                        .val(solicitud)
                        .attr("id", "id" + solicitud.id)
                );
            });
        
        }).fail(function() {
            alert("Error al cargar las solicitudes.");
        });
    });
    
    // Ver el detalle de una solicitud concreta al seleccionarla. LEER.
    $(document).on("click", "#maestro li", function(event) {
        var solicitudId = $(this).attr("id").replace("id", "");
        // Agregamos nº solicitud a consultar, a la URL. Leer.
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/" + solicitudId, function(data) {
            $("#detalle").show(); // mostrar bloque div de detalle

           // $("#id").val(data.id);
            $("#nombre").val(data.nombre); // pasar campos del data a sus homólogos html
            $("#apellido").val(data.apellido);

            $("#accionesDetalle").show(); // Los botones pertinentes ahora sí, se muestran. 
            $("#respuestasServidor").show();

        }).fail(function() {
            alert("Error al cargar los detalles.");
        });
    });


    $("#crear").on("click",function() {
        $("#detalle").show();
        $("#accionesDetalle").show();
        $("#cancelar").show(); //volver = cancelar
        $("#borrar").hide()
        $("#nombre").val("");  // Limpiar campos de nombre y apellido
        $("#apellido").val(""); 

        $("#actualizar").show();

        $("#actualizar").on("click",function(){
            var nombreNuevo = $("#nombre").val();
            var apellidoNuevo = $("#apellido").val();
            if (nombreNuevo === "" || apellidoNuevo === "") { // Ni vacíos ni de tipo distinto a cadena
                alert("Los campos no pueden estar vacíos.");
                return;
            }
            $.ajax({
                url: "https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes",
                method: "POST",
                "data": JSON.stringify({
                    id: 0,          // Cero indica creación 
                    nombre: nombreNuevo,
                    apellido: apellidoNuevo
                }),
                success: function(data) {
                    $("respuestasServidor").show();
                    $("#resCrear").text("OK. Creada nueva solicitud."); 
                    console.log(data);
                },
                error: function(data) {
                    console.log(data);
                }
            });

        })
    });


    $('#actualizar').on('click',function() {
        
            var nombreNuevo = $("#nombre").val();
            var apellidoNuevo = $("#apellido").val();

        $.ajax({                                                                            // nº ??
            url: "https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/2",
            method: "PUT",
            "data": JSON.stringify({
                id: 1,
                nombre: nombreNuevo,
                apellido: apellidoNuevo
            }),
            success: function(data) {
                $("#resActualizar").text("OK. Actualizada la solicitud."); 
                console.log(data);
            },
            error: function(data) {
                console.log(data);
            }
        });
    });

    $('#borrar').on('click',function() {
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1",
            method: "DELETE",
            success: function(data) {
                $("#resBorrar").text("OK. Borrada la solicitud."); 
                console.log(data);
            },
            error: function(data) {
                console.log(data);
            }
        
        });
        // oculto los botones que no proceden tras borrar
        $("#actualizar").hide(); 
        $("#borrar").hide();

        $("#nombre").val("");
        $("#apellido").val("");
        $("#maestro li").hide();
    });
    $("#cancelar").on("click", function() {
        $("#detalle").hide();
        $("#accionesDetalle").hide();
        $("#respuestasServidor").val("").text("");
        $("#respuestasServidor").hide();
        listar();  // Llamo al método listar para recargar el listado
    });
});


console.log("¡jQuery, Parcel, Boostrap, Ajax...!");