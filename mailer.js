document.addEventListener("DOMContentLoaded", function () {
  const email = {
    sender: 'contact.dnovao@gmail.com',
    recipient: '',
    subject: '',
    message: '',
  };

  const form = document.getElementById("formulario");
  const inputReceiver = document.querySelector("#recipient");
  const inputSubject = document.querySelector("#subject");
  const inputMessage = document.querySelector("#message");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');

  inputReceiver.addEventListener("blur", validation);
  inputSubject.addEventListener("blur", validation);
  inputMessage.addEventListener("blur", validation);

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    sendMail(email);
  });

  btnReset.addEventListener('click', function(e) {
    e.preventDefault();
    resetFormulario();
  })

  //Valida que el texto exista
  function validation(e) {
    //Validates that every field is not empty
    if (e.target.value.trim(" ") === "") {
      //Inyeccion dinamica por id.
      showError(`Field ${e.target.id} is required`, e.target.parentElement);
      email[e.target.name] = "";
      testMail();
      return;
    }

    //Validates the emails that the user enters
    if ((e.target.id === "sender" || e.target.id === "recipient") && !validateMail(e.target.value)) {
      showError("The email is not valid", e.target.parentElement);
      email[e.target.name] = "";
      testMail();
      return;
    }

    cleanError(e.target.parentElement);
    // Asignar los valores de validacion.
    email[e.target.name] = e.target.value.trim().toLowerCase();
    console.log(email);
    //Comprobacion del objeto email
    testMail();
  }

  //Funcion para hacer una validacion de email con un regex
  function validateMail(mail) {

    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const result = regex.test(mail);

    return result;

  }

  function showError(message, reference) {
    cleanError(reference);

    //Generaremos el error en el momento en el que se detecte el valor vacio
    const error = document.createElement("P");
    error.textContent = message;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    //Inyectar el error al formulario
    reference.appendChild(error);
  }

  function cleanError(reference) {
    //Comprueba que el error ya exista
    const alert = reference.querySelector(".bg-red-600");
    if (alert) {
      alert.remove();
    }
  }

  function resetFormulario() {
    // reiniciar el objeto
    email.recipient = '';
    email.subject = '';
    email.message = '';
    form.reset();
    testMail();
  }

  function testMail() {
    //Verifica que todos los valores esten llenos y se enciende el boton de enviar
    if(Object.values(email).includes('')) {
      btnSubmit.classList.add("opacity-30");
      btnSubmit.disabled = true;
      return
    } 
    btnSubmit.classList.remove("opacity-30");
    btnSubmit.disabled = false;
  }

  function sendMail(email) {
    console.log('LLamando y enviando esto');
    console.log(email);
    //es lo que permite que se envien los correos
    Email.send({
      SecureToken : "66803fab-ed0e-429c-87ef-729adffd9dd3",
      To : email.recipient,
      From : email.sender,
      Subject : email.subject,
      Body : email.message
    }).then(
      message => alert(message)
    );
  }
  //F8A98AB6F16C7B0F0965C415789B61472B5A
});
