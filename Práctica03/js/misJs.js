function enConstruccion() {
    Swal.fire({
        title: "Aviso!",
        html: "<h3>Esta sección se encuentra en construcción.</h3>",
        icon: 'warning',
        footer: '<span>Ferretería "La Cadena" agradece su comprensión.<span>',
        confirmButtonText: "Continuar",
    })
}

function modal()    {
    document.getElementById("btn_abrir").addEventListener("click",function()    {
        document.getElementsByClassName("fondo_transparente")[0].style.display="block"
        return false
    })
    document.getElementById("modal_cerrar")[0].addEventListener("click",function()  {
        document.getElementsByClassName("fondo_transparente")[0].style.display="none"
    })
}