// Script que cambia el color de fondo del header al hacer clic en un botón

// Espera que el html este cargado
document.addEventListener("DOMContentLoaded", function () {
    // creamos un boton con texto visible y le damos diferentes estilos
    const botonEstilo = document.createElement("button");
    botonEstilo.textContent = "Cambiar estilo del header";
    botonEstilo.style.marginTop = "1rem";
    botonEstilo.style.padding = "0.5rem 1rem";
    botonEstilo.style.border = "none";
    botonEstilo.style.borderRadius = "4px";
    botonEstilo.style.backgroundColor = "#FF9800";
    botonEstilo.style.color = "white";
    botonEstilo.style.cursor = "pointer";

    // insertamos el boton antes del main en el body del html
    document.body.insertBefore(botonEstilo, document.querySelector("main"));

    // definimos lo que hace el boton al clicar en el, cambiar el color del header a naranja gradiente
    botonEstilo.addEventListener("click", function () {
      const header = document.querySelector("header");
      header.style.background = "linear-gradient(90deg, #FF5722, #FFC107)";
    });
  });