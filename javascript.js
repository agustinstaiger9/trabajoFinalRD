// Calculadora

document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcularBtn");
    const borrarBtn = document.getElementById("borrarBtn");
    const direccionInput = document.getElementById("direccion");
    const resultadoDiv = document.getElementById("resultado");
  
    calcularBtn.addEventListener("click", function () {
      const direccionCliente = direccionInput.value.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios al inicio y al final
      if (direccionCliente !== "") {
        const costoEnvio = calcularCostoEnvio(direccionCliente);
        resultadoDiv.textContent = `El costo de envío es: ${costoEnvio}`;
      }
    });
  
    borrarBtn.addEventListener("click", function () {
      direccionInput.value = ""; // Borrar el contenido del campo de dirección
      resultadoDiv.textContent = ""; // Borrar el resultado anterior
    });
  
    function calcularCostoEnvio(clienteDireccion) {
      if (clienteDireccion === "san nicolas") {
        return "Envío gratuito";
      } else {
        return "$800 pesos";
      }
    }
  });

//