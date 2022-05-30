function enviarFormulario() {
    if (document.formulario.nombre.value.length == 0) {
        alert("Tenés que escribir un nombre")
        document.formulario.nombre.focus()
        return 0;
    }
 

    if (document.formulario.email.value.length == 0) {
        alert("Tenés que escribir una dirección de correo válida")
        document.formulario.email.focus()
        return 0;
    }


    if (document.formulario.comentario.value.length < 10) {
        alert("Debes redactar brevemente tu mensaje")
        document.formulario.comentario.focus()
        return 0;
    }

   alert("Muchas gracias por tu interés, en breve recibirás una respuesta.");
    document.formulario.submit();
}


