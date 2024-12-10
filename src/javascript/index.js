$(document).ready(function() {

    $("#listar").on("click", function() {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes", function(data) {
            $("#resListar").text("Ok");
            $("#resListar").attr("data-midato", data);

            // TODO pasar la info a sección Maestro.
            // TODO crear una tabla o una <ul> con los elementos del 'data'
            console.log(data);
        })
        
    });
    // TODO Programar un evento para cuando se haga clic sobre un elemento del maestro devuelva una
    //      función callback que presente el detalle.



    $("#leer").on("click", function() {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/1", function(data) {
            $("#resLeer").text("Ok"); 
 
            console.log(data);
        })
        
    });


    $('#crear').on('click',function() {
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes",
            method: "POST",
            "data": JSON.stringify({
                id: 0,
                nombre: "Juan",
                apellido: "Otro"
            }),
            success: function(data) {
                $("#resCrear").text("Ok"); 
                console.log(data);
            },
            error: function(data) {
                console.log(data);
            }
        });
    });


    $('#actualizar').on('click',function() {
        $('#principal > button[]')

        $(this).addClass('mio')
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/2",
            method: "PUT",
            "data": JSON.stringify({
                id: 1,
                nombre: "Juan",
                apellido: "Otro"
            }),
            success: function(data) {
                $("#resActualizar").text("Ok"); 
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
                $("#resBorrar").text("Ok"); 
                console.log(data);
            },
            error: function(data) {
                console.log(data);
            }
        });
    });
});


console.log("¡jQuery, Parcel, Boostrap, Ajax...!");