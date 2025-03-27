// Script que cambia el color de fondo del header al hacer clic en un botón

document.addEventListener("DOMContentLoaded", function () {
    const botonEstilo = document.createElement("button");
    botonEstilo.textContent = "Cambiar estilo del header";
    botonEstilo.style.marginTop = "1rem";
    botonEstilo.style.padding = "0.5rem 1rem";
    botonEstilo.style.border = "none";
    botonEstilo.style.borderRadius = "4px";
    botonEstilo.style.backgroundColor = "#FF9800";
    botonEstilo.style.color = "white";
    botonEstilo.style.cursor = "pointer";
  
    document.body.insertBefore(botonEstilo, document.querySelector("main"));
  
    botonEstilo.addEventListener("click", function () {
      const header = document.querySelector("header");
      header.style.background = "linear-gradient(90deg, #FF5722, #FFC107)";
    });
  });