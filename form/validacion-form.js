
  document.querySelector('form').addEventListener('submit', function (e) {
    const nombre = document.querySelector('input[name="name"]').value.trim();
    const apellido = document.querySelector('input[name="apellido"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const mensaje = document.querySelector('textarea[name="message"]').value.trim();
    const verificacion = document.querySelector('#verificacion').value.trim();
    const robotCheck = document.querySelector('#robot').checked;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    let errores = [];

    if (nombre === "") errores.push("El nombre es obligatorio.");
    if (apellido === "") errores.push("El apellido es obligatorio.");
    if (!emailValido) errores.push("El email no es válido.");
    if (mensaje.length < 10) errores.push("El mensaje debe tener al menos 10 caracteres. una onda. un chiste");
    if (verificacion !== "5") errores.push("La verificación matemática es incorrecta.");
    if (!robotCheck) errores.push("Debés confirmar que no sos un robot.");

    if (errores.length > 0) {
      e.preventDefault(); // Evita el envío
      alert("Por favor corregí los siguientes errores:\n\n" + errores.join("\n"));
    }
  });

