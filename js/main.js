const ingresosDeMarzo = 50000
const ingresosDeAbril = 60000
const calcularPromedio = (numero1, numero2) => (numero1 + numero2) / 2;
let promedio = calcularPromedio(ingresosDeMarzo, ingresosDeAbril);
alert("El promedio de ingresos de Marzo y Abril es: " + promedio);
function convertirASegundos() {
    const unidad = prompt("Ingrese la unidad de tiempo que desea convertir a segundos (Horas o Minutos):");
    if (unidad === "Horas") {
        const cantidad = parseFloat(prompt("Ingrese la cantidad de " + unidad + " que desea convertir a segundos:"));
        segundos = cantidad * 3600;
    } else if (unidad === "Minutos") {
        const cantidad = parseFloat(prompt("Ingrese la cantidad de " + unidad + " que desea convertir a segundos:"));
        segundos = cantidad * 60;
    }
    alert("La cantidad de segundos es: " + segundos);
}
convertirASegundos();
function validarSesión() {
    const contraseña = "1234";
    let contraseñaIngresada = "";
    while (contraseñaIngresada !== contraseña) {
        contraseñaIngresada = prompt("Ingrese su contraseña:");
        if (contraseñaIngresada !== contraseña) {
            alert("Contraseña incorrecta. Intente nuevamente.");
        }    
    }
    return true;
}
let acceso = validarSesión();
if (acceso) {
    alert("Acceso concedido. Puede continuar.");
}



const comidaDisponible = ["Pizza", "Hamburguesa", "Ensalada", "Sushi", "Pasta", "Tacos"];
for (const comida of comidaDisponible) {
    alert("Comida disponible: " + comida);
}
comidaDisponible.push("Sopa");
const agotado = comidaDisponible.shift();
alert("Se ha agotado la comida: " + agotado);
comidaDisponible[2] = "Ensalada César";
alert("Comida disponible actualizada: " + comidaDisponible.join(", "));
let comidaSeleccionada = prompt("Ingrese el nombre de la comida que desea seleccionar:");
if (comidaDisponible.includes(comidaSeleccionada)) {
    let indice = comidaDisponible.indexOf(comidaSeleccionada);
    alert("Ha seleccionado el número " + (indice + 1) + ": " + comidaSeleccionada);
} else {
    alert("Su pedido ya no está disponible.");
}
comidaDisponible.splice(comidaDisponible.indexOf(comidaSeleccionada), 1);
alert("Comida disponible después de su selección: " + comidaDisponible.join(", "));
const otroPedido = prompt("¿Desea realizar otro pedido? (Sí o No)");
if (otroPedido === "Sí") {
    let comidaSeleccionada = prompt("Ingrese el nombre de la comida que desea seleccionar:");
    if (comidaDisponible.includes(comidaSeleccionada)) {
        let indice = comidaDisponible.indexOf(comidaSeleccionada);
        alert("Ha seleccionado el número " + (indice + 1) + ": " + comidaSeleccionada);
    } else {
        alert("Su pedido ya no está disponible.");
    }
}