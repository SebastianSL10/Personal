window.addEventListener('load', () => {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const Dir = document.getElementById('Dir')
    const tele = document.getElementById('tele')
    const fecha = document.getElementById('date')
    const peso = document.getElementById('peso')
    const email = document.getElementById('email')
    const itin = document.getElementById('iti')
    const Gen = document.getElementById('gen')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const DirValor = Dir.value.trim()
        const teleValor = tele.value.trim()
        const FechaValor = fecha.value.trim()
        const pesoValor = peso.value.trim()
        const emailValor = email.value.trim()
        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if (!usuarioValor) {
            //console.log('CAMPO VACIO')
            validaFalla(usuario, 'Campo vacío')
        } else if (!validaNombre(usuarioValor)) {
            validaFalla(usuario, 'El nombre no es válido')
        }else {
            validaOk(usuario)
        }

        //validando direccion
        if (!DirValor) {
            //console.log('CAMPO VACIO')
            validaFalla(Dir, 'Campo vacío')
        } else {
            validaOk(Dir)
        }

        //validando telefono
        if (!teleValor) {
            //console.log('CAMPO VACIO')
            validaFalla(tele, 'Campo vacío')
        } else if (teleValor.length < 9) {
            validaFalla(tele, 'El teléfono debe tener 9 carácteres cómo mínimo.')
        } else {
            validaOk(tele)
        }

        //validando fecha
        if (!FechaValor) {
            //console.log('CAMPO VACIO')
            validaFalla(fecha, 'Campo vacío')
        } else {
            validaOk(fecha)
        }

        //validando peso
        if (!pesoValor) {
            //console.log('CAMPO VACIO')
            validaFalla(peso, 'Campo vacío')
        } else {
            validaOk(peso)
        }

        //validando campo email
        if (!emailValor) {
            validaFalla(email, 'Campo vacío')
        } else if (!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        } else {
            validaOk(email)
        }

        ///////Validacion del Genero//////////////////
        var opc1 = document.getElementById("gen");
        if (opc1.value == null || opc1.value == "") {
            validaFalla(Gen, "Tiene que escoger algún género");
            return false;
        } else{
            validaOk(Gen)
        }

        ///////Validacion del Itinerario//////////////////
        var contador = 0;     //La variable contador calcula los radios no chequeados
        var Paque = document.getElementsByName("iti");
        for (i = 0; i < Paque.length; i++) {
            if (Paque.item(i).checked == false) {
                contador = contador + 1;
            }
        }
        if (contador == Paque.length) {
            validaFalla(itin, "Debe seleccionar un Itinerario");
            return false;
        } else {
            validaOk(itin, "Formulario enviado Correctamente")
            return true;
        }

    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    
    const validaNombre = (usuario) => {
        return /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(usuario);
    }
})