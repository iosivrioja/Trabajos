$(document).ready(function () {
    $("a").click(function(evento) {
        alert("Has pulsado el enlace, ahora será dirigido a la página de la USAT");
    });
});

$("#c1b").click(function () {
    $("#cont1").toggle(1500);
}, function () {
    $("#cont1").toggle(1500);
});

$(document).ready(function () {
            // Definimos el evento 'click' al hacer clic en 'boton1'
            $("#boton1").click(function(){
                $("#log").text("Hiciste clic en el botón");
            });

            // Al hacer clic en 'boton2' se eliminará el evento de 'boton1'
            $("#boton2").click(function(){
                $("#boton1").unbind("click");
            });

            // Cuando el cursor entra en el área de la imagen
            $("#img1").mouseover(function(){
                $("#log").text("El cursor ha entrado en el área de la imagen");
            });

            // Cuando el cursor sale del área de la imagen
            $("#img1").mouseout(function(){
                $("#log").text("el cursor ha salido del área de la imagen");
            });

            // Definimos el evento 'mousedown' en 'div2'
            $("#div2").mousedown(function(){
                $("#log").text("Has pulsado el botón del ratón sobre 'div2'");
            });

            // Definimos el evento 'mouseup' en 'div2'
            $("#div2").mouseup(function(){
                $("#log").text("Acabas de soltar el botón del ratón sobre 'div2'");
            });

            // Definimos el evento 'dblclick' en 'div2'
            $("#div2").dblclick(function(){
                $("#log").text("Hiciste doble clic en el div");
            });
        });