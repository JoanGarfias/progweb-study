/*
precio
cantidad
descuento
impuesto
*/

const inputs = [
    document.querySelector("#precio"),    
    document.querySelector("#cantidad"),
    document.querySelector("#descuento"),
    document.querySelector("#impuesto"),
]

document.addEventListener("DOMContentLoaded", () => {
    inputs.forEach(input => {
        input.addEventListener("blur", calcularTotal);
    });
});

function calcularTotal() {
    const precio = parseFloat(inputs[0].value) || 0;
    const cantidad = parseFloat(inputs[1].value) || 0;
    const descuento = parseFloat(inputs[2].value) || 0;
    const impuesto = parseFloat(inputs[3].value) || 0;
    if(inputs[0].value == "" || inputs[1].value == ""){
        return;
    }
    
    let total = precio * cantidad;

    if (descuento > 0) {
        total -= (total * (descuento / 100));
    }

    if (impuesto > 0) {
        total += (total * (impuesto / 100));
    }

    document.querySelector("#total").textContent = `Total: $${total.toFixed(2)}`;
}