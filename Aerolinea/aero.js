function comprobar() {
    if (document.formu.Nom.value == "" || document.formu.Dir.value == "" || document.formu.tel.value == "" || document.formu.Correo.value == "" ||
        document.formu.edad.value == "" || document.formu.peso.value == "") {
        alert("Todos los campos son obligatorios");
        document.formu.Nom.focus();
        document.getElementById("Nom").style.border = "2px solid black";
        document.getElementById("Dir").style.border = "2px solid black";
        document.getElementById("tel").style.border = "2px solid black";
        document.getElementById("Correo").style.border = "2px solid black";
        document.getElementById("edad").style.border = "2px solid black";
        document.getElementById("peso").style.border = "2px solid black";
        return false;
    }

    ///////Validacion del Genero//////////////////

    var opc1 = document.getElementById("gen");
    if (opc1.value == null || opc1.value == "") {
        alert("Tiene que escoger algún género");
        document.getElementById("gen").style.border = "3px solid black";
        return false;
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
        alert("Debe seleccionar un Itinerario");
        return false;
    }
}
function mis() {
    //Valida si el correo es valido
    var ElCorreo = document.getElementById('Correo');
    var ValidaCorreos = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (ValidaCorreos.test(ElCorreo.value)) {
        return true;
    } else {
        alert('Correo Electrónico Inválido');
        document.formu.Correo.focus();
        return false;
    }
}
/*
function si() {
    //Valida si el numero es valido
    var tele = document.getElementById('tel');
    var w = document.getElementById("peso");
    var Validaphone = /^\d{0,14}$/;
    if (w.value != Validaphone || tele.value != Validaphone) {
        alert("Los campos 𝐓𝐞𝐥𝐞́𝐟𝐨𝐧𝐨, Edad y Peso del Equipaje solo deben tener carácteres numéricos");
        return false;
    }else {
        alert('Bien');
        return true;
    }
}
function list(){
    var age = document.getElementById("edad");
    var Validaedad = /^\d{0,14}$/;
    if (age.value != Validaedad){
        alert("El campo Edad solo debe tener carácteres numéricos");
        return false;
    }
    else {
        alert('Bien edad');
        return true;
    }
}

usuario: /^[a-zA-Z0-9\_\-]{4,16}$/ // Letras, numeros, guion y guion_bajo
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
password: /^.{4,12}$/, // 4 a 12 digitos.
correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
telefono: /^\d{7,14}$/ // 7 a 14 numeros.  */



function list2() {
    var opc1 = document.getElementById("gen");
    if (opc1.value == null || opc1.value == "") {
        alert("Tiene que escoger algún género");
        document.getElementById("gen").style.border = "3px solid black";
        return false;
    } else {
        document.getElementById("gen").style.border = "7px solid red";
        return true;
    }

}
function comprobar2() {
    if (document.formu.Nom.value == "" || document.formu.Nom.value == null) {
        alert("Debe Ingresar Nombres y Apellidos");
        document.formu.Nom.focus();
        return false;
    }
    var nam = document.getElementById("Nom");
    var regName = / ^([a-zA-Z])/;
    if (regName.test(nam.value)) {
        alert('Nombre Válido');
        return true;
    } else {
        alert('El nombre solo debe tener carácteres alfabéticos');
        return false;
    }
}
function mis2() {
    ;
    //Valida si el correo es valido
    var ElCorreo = document.getElementById('Correo');
    var ValidaCorreos = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (ValidaCorreos.test(ElCorreo.value)) {
        alert('Correo Electrónico Válido');
        return true;
    } else {
        alert('Correo Electrónico Inválido');
        return false;
    }
    /*if (document.formu.Dir.value == "" || document.formu.Dir.value == null) {
        alert("Debe ingresar su dirección");
        return false;
    }
    var contador = 0;//La variable contador calcula los radios no chequeados
    var Paque = document.getElementsByName("iti");
    for (i = 0; i < Paque.length; i++) {
        if (Paque.item(i).checked == false) {
            contador = contador + 1;
        }
    }
    if (contador == Paque.length) {
        alert("Debe seleccionar un Itinerario");
        return false;
    }*/
}

/*var Usu=document.getElementById("Nom");
var Dire=document.getElementById("Dir");

if ((Usu.value==null || Usu.value=="") && (Dire.value==null || Dire.value=="")) {
    alert("Campos vacios");
    return false;            
}
if (Usu.value==null || Usu.value=="") {
    alert("Los nombres y apellidos son obligatorios");
    return false;             
}
else{
    if(Dire.value==null || Dire.value=="") {
        alert("La dirección es obligatoria");
        return false;
        }
        else{
            alert("Datos correctos");
            return true;
        }

    }
  
    
*/
