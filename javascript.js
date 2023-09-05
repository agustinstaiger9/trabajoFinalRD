// Calculadora de envios en Productos

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
      direccionInput.value = "";
      resultadoDiv.textContent = "";
    });

    function calcularCostoEnvio(clienteDireccion) {
      if (clienteDireccion === "san nicolas") {
        return "Envío gratuito";
      } else {
        return "$800 pesos";
      }
    }
  });

// Boton INGRESA del index

document.getElementById('ingresar').addEventListener('click', function() {
  const edad = prompt('Por favor, ingrese su edad:');

  if (edad === null) {
      // El usuario canceló el prompt
      return;
  }

  const edadNumerica = parseInt(edad);

  if (!isNaN(edadNumerica)) {
      if (edadNumerica >= 18) {
          // El usuario es mayor de 18 años, mostrar un mensaje y permitir la navegación
          alert('¡Puede seguir navegando!');
      } else {
          // El usuario es menor de 18 años, mostrar un mensaje y cerrar la página
          alert('Debes ser mayor de 18 años para acceder a esta página.');
          window.close();
      }
  } else {

      alert('Por favor, ingrese una edad válida.');
  }
});


//FORMULARIO - CONTACTO

function enviarConsulta() {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var comentario = document.getElementById("comentario").value;

        if (nombre === "" || apellido === "" || email === "" || comentario === "") {
            alert("Faltan campos por completar. Por favor, completa todos los campos.");
        } else {
            // Aquí puedes agregar el código para enviar la consulta, por ejemplo, una solicitud AJAX.

            // Una vez enviada la consulta con éxito, muestra el mensaje de éxito.
            alert("Tu consulta fue enviada con éxito.");
        }
    }

