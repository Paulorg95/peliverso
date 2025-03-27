// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita el envío real del formulario
  
      // Obtener los valores
      const nombre = document.querySelector("input[name='nombre']").value.trim();
      const titulo = document.querySelector("input[name='titulo']").value.trim();
      const opinion = document.querySelector("textarea[name='opinion']").value.trim();
  
      // Validación básica
      if (!nombre || !titulo || !opinion) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
      }
  
      // Mostrar mensaje de confirmación
      alert("¡Gracias por tu opinión! La revisaremos pronto para publicarla.");
  
      // Opcional: limpiar el formulario
      form.reset();
    });
  });  