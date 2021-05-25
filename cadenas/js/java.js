function separador(){
    var miString = document.getElementById("texto").value;
    var mitad1,mitad2;
    posicion_mitad = miString.length/ 2;

    mitad1 = miString.substring(0,posicion_mitad);
    mitad2 = miString.substring(posicion_mitad,miString.length);
    // document.write("<h3>"+mitad1 + "<br>" + mitad2+"</h3>");
    document.getElementById('mitad1').innerHTML='La primera mitad es: '+mitad1;
    document.getElementById('mitad2').innerHTML='La segunda mitad es: '+mitad2;
    
}
function mayusculas(){
    var miString = document.getElementById("texto").value;
    var mayusc;

    mayusc = miString.toUpperCase();
    document.getElementById('mayusculas').innerHTML='En mayúsculas: '+mayusc;
    
    
}
function limpiar(){
    document.getElementById('mitad1').innerHTML='';
    document.getElementById('mitad2').innerHTML='';
    document.getElementById('mayusculas').innerHTML='';
    document.getElementById('texto').value='';
}