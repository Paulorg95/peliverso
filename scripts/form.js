// Esperar a que el HTML esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el formulario de la pagina  
  const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) { // reacciona al evento de envio del formulario
      e.preventDefault(); // Evita el envío real del formulario ya que lo hacemos como prueba
  
      // Obtener los valores de los campos del formulario
      const nombre = document.querySelector("input[name='nombre']").value.trim();
      const titulo = document.querySelector("input[name='titulo']").value.trim();
      const opinion = document.querySelector("textarea[name='opinion']").value.trim();
  
      // Comprueba que los campos no esten vacios cuando se envia el formulario
      if (!nombre || !titulo || !opinion) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
      }
  
      // Mostrar mensaje de confirmación
      alert("¡Gracias por tu opinión! La revisaremos pronto para publicarla.");
  
      // Limpia el formulario una vez enviado correctamente
      form.reset();
    });
  });  