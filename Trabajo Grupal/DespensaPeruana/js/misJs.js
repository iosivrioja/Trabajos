function asignarPrecio() {
    var comboProductos = document.getElementById("nombreProducto");
    var textoSeleccionado = comboProductos.options[comboProductos.selectedIndex].text;
    if (textoSeleccionado == "Producto 1") {
        document.getElementById("precioProducto").value = "S/. 500";
    } else if (textoSeleccionado == "Producto 2") {
        document.getElementById("precioProducto").value = "S/. 200";
    } else if (textoSeleccionado == "Producto 3") {
        document.getElementById("precioProducto").value = "S/. 340";
    } else if (textoSeleccionado == "Producto 4") {
        document.getElementById("precioProducto").value = "S/. 210.99";
    } else if (textoSeleccionado == "Producto 5") {
        document.getElementById("precioProducto").value = "S/. 100";
    } else {
        document.getElementById("precioProducto").value = "";
    }

}

var listaProductos = [];

function Producto(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
}

function agregar(nombreE, precioE) {
    var modificar = false;
    var cantidadE = 1;
    var nuevoProducto = new Producto(nombreE, cantidadE, precioE);
    for (i = 0; i < listaProductos.length; i++) {
        var objProducto = listaProductos[i];
        if (objProducto.nombre == nombreE) {
            var cantidadE = parseInt(objProducto.cantidad) + 1;
            nuevoProducto = new Producto(nombreE, cantidadE, precioE);
            listaProductos[i] = nuevoProducto;
            modificar = true;
        }
    }
    if (!modificar) {
        listaProductos.push(nuevoProducto);
    }
    actualizarTabla();
}

function borrarTodo() {
    while (listaProductos.length != 0) {
        listaProductos.splice(0, 1)
    }
    actualizarTabla();
}

function borrarDato(nombreProducto) {
    var objProducto;
    for (var i = 0; i < listaProductos.length; i++) {
        var obj = listaProductos[i];
        if (obj.nombre == nombreProducto) {
            objProducto = obj;
        }
    }
    objProducto.cantidad = parseInt(objProducto.cantidad) - 1;
    if (objProducto.cantidad == 0) {
        console.log("entre a 0")
        for (var i = 0; i < listaProductos.length; i++) {
            var obj = listaProductos[i];
            if (obj.nombre == objProducto.nombre) {
                listaProductos.splice(i, 1);
            }
        }
    }
    actualizarTabla();
}

function subTotal() {
    var acum = 0;
    if (listaProductos.length == 0) {
        acum = 0;
    } else {
        for (var i = 0; i < listaProductos.length; i++) {
            var objProducto = listaProductos[i];
            var precioProductos = parseFloat(objProducto.precio) * parseFloat(objProducto.cantidad);
            acum = parseFloat(acum) + precioProductos;
        }
    }
    return acum;
}

function actualizarTabla() {
    var elementos = document.getElementById('tabla');
    var elementosTabla = elementos.getElementsByTagName("tr");
    while (elementosTabla.length != 0) {
        elementos.removeChild(elementosTabla.item(0));
    }
    var registro = "";
    if (listaProductos.length == 0) {
        document.getElementById('tabla').innerHTML += '<tr><th scope="row">----</th><td>----</td><td>----</td><td></td></tr>';
    } else {
        for (var i = 0; i < listaProductos.length; i++) {
            var objProducto = listaProductos[i];
            document.getElementById('tabla').innerHTML += '<tr><th scope="row">' + objProducto.nombre + '</th><td class="cantidadProducto">' + objProducto.cantidad + '</td><td>S/. ' + objProducto.precio + '</td><td><button type="button" class="btn btn-success" onclick=\'borrarDato("' + objProducto.nombre + '")\'>-</button></td></tr>';
        }
    }
    var precioPagar = subTotal();
    console.log(precioPagar);
    if (precioPagar == 0) {
        document.getElementById("SubTotal").innerHTML = "----";
    } else {
        document.getElementById("SubTotal").innerHTML = "S/. " + precioPagar.toFixed(2);
    }
    guardadoLocal();
}

function guardadoLocal() {
    localStorage.clear();
    if (listaProductos.length != 0) {
        for (var i = 0; i < listaProductos.length; i++) {
            var obj = listaProductos[i];
            localStorage.setItem(i, JSON.stringify(obj));
        }

    } else {
        localStorage.clear();
    }
}

function obtenerLocal() {
    if (localStorage.length != 0) {
        for (var i = 0; i < localStorage.length; i++) {
            var obj = JSON.parse(localStorage.getItem(i));
            listaProductos[i] = obj;
        }
    }
    actualizarTabla();
}

function enviarCompra() {
    var nombre = document.getElementById('nombreApellido');
    var email = document.getElementById('email');
    nombre.className = 'form-control';
    email.className = 'form-control';
    if (subTotal() == 0) {
        Swal.fire({
            title: "Carrito vacio",
            icon: 'warning',
            confirmButtonText: "Comprar",
            timer: 2000,
            timerProgressBar: true,
        })
    } else if (nombre.value.length == 0) {
        nombre.className = 'form-control invalido';
        nombre.focus();
    } else if (email.value.length == 0) {
        email.className = 'form-control invalido';
        email.focus();
    } else {
        Swal.fire({
            title: "Compra realizada",
            html: '<h4><b>Nombre y apellidos:</b> ' + nombre.value + '</h4><br><h4><b>Email:</b> ' + email.value + '</h4><br><h4><b>Total compra:</b> S/. ' + subTotal() + '</h4>',
            icon: 'success',
            footer: '<span>Baby Things agradece su compra.<span>',
            confirmButtonText: "Listo",
            timer: 10000,
            timerProgressBar: true,
            allowOutsideClick: false,
        })
        borrarTodo();
        nombre.value = "";
        email.value = "";
    }
}

function enConstruccion() {
    Swal.fire({
        title: "Aviso!",
        html: "<h3>Esta sección se encuentra en construcción.</h3>",
        icon: 'warning',
        footer: '<span>Baby Things agradece su comprensión.<span>',
        confirmButtonText: "Continuar",
    })
}