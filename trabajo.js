 document.addEventListener('DOMContentLoaded', function () {
      const contactForm = document.getElementById('contactForm');
      const formMessage = document.getElementById('formMessage');

      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Remove previous validation states
        contactForm.classList.remove('was-validated');

        // Check if form is valid
        if (!contactForm.checkValidity()) {
          contactForm.classList.add('was-validated');
          showMessage('Por favor completa todos los campos correctamente.', 'danger');
          return;
        }

        // Get form values
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Simulate form submission (in production, this would send to a server)
        console.log('[v0] Form submitted:', { nombre, correo, mensaje });

        // Show success message
        showMessage(`¡Gracias ${ nombre }! Tu mensaje ha sido enviado correctamente.Te contactaremos pronto a ${ correo }.`, 'success');

        // Reset form
        contactForm.reset();
        contactForm.classList.remove('was-validated');

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `alert alert - ${ type } mt - 3`;
        formMessage.classList.remove('d-none');

        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.classList.add('d-none');
        }, 5000);
      }
    });