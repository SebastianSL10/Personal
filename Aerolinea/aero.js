function list() {
    var opc1 = document.getElementById("gen");
    if (opc1.value == null || opc1.value == "") {
        alert("Tiene que escoger algún género");
        document.getElementById("gen").style.border = "3px solid black";
        return false;
    } else {
        document.getElementById("gen").style.border = "1px red";
        return false;
    }

}
function comprobar() {
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
    }else{
        alert('El nombre solo debe tener carácteres alfabéticos');
        return false;
    }
}
function mis(){;
    //Valida si el correo es valido
    var ElCorreo = document.getElementById('Correo');
    var ValidaCorreos = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (ValidaCorreos.test(ElCorreo.value)) {
        alert('Correo Electrónico Válido');
        return true;
    }
    if (document.formu.Dir.value == "" || document.formu.Dir.value == null) {
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
    }
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

        }*/