function ej1() {
    var cua = document.getElementById("cuadrado");

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var fila = document.createElement("tr");
    var celdath = document.createElement("th");
    txth = document.createTextNode("Número");
    celdath.appendChild(txth);
    fila.appendChild(celdath)
    var celdath = document.createElement("th");
    txth = document.createTextNode("Cuadrado");
    celdath.appendChild(txth);
    fila.appendChild(celdath)
    tblBody.appendChild(fila);
    for (let n = 1; n <=50; n++) {
    for (let i = 0; i <2; i++) {
        var fila = document.createElement("tr");
        var celdatd = document.createElement("td");
        var textoCelda=document.createTextNode(n);
        celdatd.appendChild(textoCelda);
        fila.appendChild(celdatd);
        var celdatd = document.createElement("td");
        var textoCelda=document.createTextNode(n*n);
        celdatd.appendChild(textoCelda);
        fila.appendChild(celdatd);
    }
     tblBody.appendChild(fila)   ;
    }

    tabla.appendChild(tblBody);
    cua.appendChild(tabla);
    tabla.setAttribute("class","table table-bordered border-info");
    fila.setAttribute("class","table table-bordered border-info");
    tabla.setAttribute("border", "3");
    document.getElementById("cuadrado").style.display = "block";
}
/////Ejercicio 2//////////
function ej2() {
    var cua = document.getElementById("pare");
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var fila = document.createElement("tr");
    var celdath = document.createElement("th");
    txth = document.createTextNode("Números Impares");
    celdath.appendChild(txth);
    fila.appendChild(celdath)
    celdath.appendChild(txth);
    fila.appendChild(celdath);
    tblBody.appendChild(fila);
    
    
    for (let o = 1; o <=100 ; o+=2) {
    for (let i = 0; i <1; i++) {
        var fila = document.createElement("tr");
        var celdatd = document.createElement("td");
        var textoCelda=document.createTextNode(o);
        celdatd.appendChild(textoCelda);
        fila.appendChild(celdatd);
        tblBody.appendChild(fila);
    }
    }
    var cuan = document.getElementById("pare");
    var tabla2 = document.createElement("table");
    var tblBody2 = document.createElement("tbody");
    var fila2 = document.createElement("tr");
    var celdath2 = document.createElement("th");
    txth = document.createTextNode("Números pares");
    celdath2.appendChild(txth);
    fila2.appendChild(celdath2)
    celdath2.appendChild(txth);
    fila2.appendChild(celdath2);
    tblBody.appendChild(fila2);

    for (let p = 102; p <=200 ; p+=2) {
        var fila2 = document.createElement("tr");
        var celdatd2 = document.createElement("td");
        var textoCelda2=document.createTextNode(p);
        celdatd2.appendChild(textoCelda2);
        fila2.appendChild(celdatd2);
        tblBody.appendChild(fila2)   ;
    }
    
    tabla2.appendChild(tblBody2);
    cuan.appendChild(tabla2);
    tabla2.setAttribute("class","table table-bordered border-info");
    fila2.setAttribute("class","table table-bordered border-info");
    tabla2.setAttribute("border", "3");

    tabla.appendChild(tblBody);
    cua.appendChild(tabla);
    tabla.setAttribute("class","table table-bordered border-info");
    fila.setAttribute("class","table table-bordered border-info");
    tabla.setAttribute("border", "3");
    document.getElementById("pare").style.display = "block";
    
}
/*function ej2() {
    var cua = document.getElementById("par");

    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var fila = document.createElement("tr");
    var celdath = document.createElement("th");
    txth = document.createTextNode("Número Impar");
    celdath.appendChild(txth);
    fila.appendChild(celdath)
    var celdath = document.createElement("th");
    txth = document.createTextNode("Número Par");
    celdath.appendChild(txth);
    fila.appendChild(celdath)
    tblBody.appendChild(fila);
    for (let o = 1; o <=100 ; o+=2) {
    for (let i = 0; i <2; i++) {
        var fila = document.createElement("tr");
        var celdatd = document.createElement("td");
        var textoCelda=document.createTextNode(o);
        celdatd.appendChild(textoCelda);
        fila.appendChild(celdatd);
    }
    for (let p = 102; p <=200 ; p+=2) {
        var celdatd = document.createElement("td");
        var textoCelda=document.createTextNode(p);
        celdatd.appendChild(textoCelda);
        fila.appendChild(celdatd);
     
    }    
    tblBody.appendChild(fila);
    }
    tabla.appendChild(tblBody);
    cua.appendChild(tabla);
    tabla.setAttribute("class","table table-bordered border-success");
    fila.setAttribute("class","table table-bordered border-success");
    tabla.setAttribute("border", "3");
    
}*/
/////Ejercicio 3/////
function ej3() {
    let a=[];
    let b= document.getElementById("resul3");
    var numero=document.getElementById("valor").value;
// Si el número es impar, restar 1 para obtener el número par más cercano
if (numero % 2 !== 0) {
  numero -= 1;
}

// Iterar desde el número dado hasta 2 en pasos de 2 y imprimir cada número
for (let i = numero; i >= 2; i -= 2) {
  a.push(i)
  b.value=`${a}`;
}
}

/////////Ejercicio 5//////////////////
function numbusc(){
    var p = document.getElementById("array");
    var e = document.getElementById("encon");
    var h = document.getElementById("encont");
    var arreglo = [];
    for (let s=0; s <=20; s++){
        arreglo.push(parseInt(Math.random()* (10)));
        
    }    
    var num = parseInt(document.getElementById("valor").value);
    p.value = ("Arreglo: ",arreglo);
    //document.write("<br>"+"Número buscado: ", num+"<br>");
    
    function busca(dato){
        if (dato == num){
            d = true
        }else {
            d = d 
        }
    }
    d= false;
    arreglo.forEach(busca);
    let r=arreglo.indexOf(num)
    if (d == false){
        h.value =("El número no se encontró")
    }else if(d == true)
        e.value =("El número esta en la posición:" +r);
}
/////////Ejercicio 6/////////
function limit() {
    var l= parseInt(document.getElementById("dimen").value);
    var h = document.getElementById("resul6");
    arreglo = new Array (l);
    for (let e = 0; e < arreglo.length; e++) {
        arreglo[e] = e+1; 
    }
    h.value = ("El arreglo es: [ "+arreglo+" ]");
}

////////////Ejercicio 7/////////////
function ejer7(){
    let e = document.getElementById("resul7");
    let r = document.getElementById("repi");
    var arreglo = [2,18,4,2,3,15,15,5,16,4,18].sort();
    e.value = (arreglo);

    let unicElem = [];
    let repet = [];
    var contador = 1;
    var x = "";
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i+1] == arreglo[i]) {
            x += ("Se repite el número "+ arreglo[i] + "--") //document.write("<br>" + "Se repite el número "+ arreglo[i]);
            contador ++;
            r.value = `${x}`
        }else{
            unicElem.push(arreglo[i]);
            repet.push(contador);
            contador=1;
        }
    }
    for (let j = 0; j < unicElem.length; j++) {
        //x +=("El número "+unicElem[j] + " se repite "+repet[j]);
    }
}

////////////Ejercicio 8////////////
function conv() {

    var num = document.getElementById("num").value;
    var r = document.getElementById("resul8");
    var bina= "";

    while (num > 0) {
        bina = (num % 2) + bina;
        num = Math.floor(num / 2);
    }
    r.value = ("El binario es: "+bina);
    
}

////////////////ejercicio 9////////////////
function bina() {
    var b = document.getElementById("bin").value;
    var p = document.getElementById("resul9");
    let y = parseInt(b,2);
    p.value = ("El número es: "+y);    
}

////////////Ejercicio 12/////////////////
function pob(){
    let g = document.getElementById("anno");
    var l = 2022;
    var s = 25000000;
    var v = 18900000;
    var rt = 0.02;
    var yt = 0.03;

   
    while (v<s) {
        s+=s+rt;
        v+=v+yt;
        l++
}
    g.value = ("En el año "+ l + 
    ", la población del país B superará a la población del pais A");
}

//////Ejercicio 14////////////
function transf() {
    let t = document.getElementById("resul14");
    /*Estructura normal
    for (a = 0, b = 0; a < 7; a++, b += 2){
    console.log(a,b)
    }*/

    //Estructura con While
    let a = 0;
    let b = 0;

    while (a < 7) {
    t.value = ("<br>",a,"-", b);
    a++;
    b += 2;
    } 
    
}

///////////////Ejercicio 17/////////////////////
function fibo() {
    let x=[];
    let resul = document.getElementById("fibo");
    a=1	
    b=1
    c=1 
    do{
        x.push(c)	
        resul.value=`${x}`;//document.write(c+"<br>")
    c=a+b
    a=b	
    b=c	
    }
    while(c<=1700)
    
    }
