function modal()    {
    document.getElementById("btn_abrir").addEventListener("click",function()    {
        document.getElementsByClassName("fondo")[0].style.display="block"
        return false
    })
    document.getElementById("modal_cerrar")[0].addEventListener("click",function()  {
        document.getElementsByClassName("fondo")[0].style.display="none"
    })
}