//Ejercicio 1
function cua() {
    for (let i = 1; i <=50 ; i++) {
        document.write("Número:   "+i+ "   y su cuadrado: "+ i*i +"<br>");
    }     
}
///Funciones ejercicio 2///
function simpa() {
    for (let o = 1; o <=100 ; o+=2) {
    document.write("<br>","= ",o);
    }     
}
function par() {
    for (let p = 102; p <=200 ; p+=2) {
    document.write("<br>","=== ",p);
    }     
}
/////Ejercicio 3/////

function NPDesc() {
    numero=parseInt(prompt("Digite un números"));
// Si el número es impar, restar 1 para obtener el número par más cercano
if (numero % 2 !== 0) {
  numero -= 1;
}

// Iterar desde el número dado hasta 2 en pasos de 2 y imprimir cada número
for (let i = numero; i >= 2; i -= 2) {
  document.write(i,'</br>');
}
}
//Ejercicio 4//

//Ejercicio 5//
function numbusc(){
    var arreglo = [];
    for (let s=0; s <=20; s++){
        arreglo.push(parseInt(Math.random()* (25)));
        
    }      
    var num=parseInt(prompt("Ingrese un número para buscarlo en el arreglo"))
    document.write("Arreglo: ",arreglo+"<br>");
    document.write("<br>"+"Número buscado: ", num+"<br>");
    
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
        document.write("<br>"+"El número no se encontró")
    }else if(d==true)
        document.write("<br>"+"El número esta en la posición:" +r);
    
    }
//Ejercicio 6//
function limit() {
    var l= parseInt(prompt("¿De cuantos números quiere que sea el arreglo?"));
    arreglo = new Array (l);
    for (let e = 0; e < arreglo.length; e++) {
        arreglo[e] = e+1; 
    }
    document.write("El arreglo es: [ "+arreglo+" ]");
}

//Ejercicio 7//
function ejer7(){
    var arreglo = [2,15,8,4,2,3,15,9,7,1,5,16,4,18].sort();
    document.write(arreglo);

    let unicElem = [];
    let repet = [];
    var contador = 1;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i+1] == arreglo[i]) {
            document.write("<br>" + "Se repite el número "+ arreglo[i]);
            contador ++;
        }else{
            unicElem.push(arreglo[i]);
            repet.push(contador);
            contador=1;
        }
    }
    for (let j = 0; j < unicElem.length; j++) {
        //console.log("El número "+unicElem[j] + " se repite "+repet[j])  
    }
}

//Ejercicio 8//
function conv() {
    var num = parseInt(prompt("Número"));
    var bina= "";

    while (num > 0) {
        bina = (num % 2) + bina;
        num = Math.floor(num / 2);
    }
    document.write("El binario es: "+bina);
    
}
//ejercicio 9
function binario() {
    let binario = prompt("Ingrese binario mi papa");
    let y = parseInt(binario,2);
    document.write("Número natural = "+y)
    
}
//Ejercicio 10
//ejercicio 11
//Ejercicio 12
function pob(){
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
document.write("En el año ",l, ", la población del país B superará a la población del pais A");
}
//Ejercicio 13

//Ejercicio 14
function transf() {
    /*Estructura normal
    for (a = 0, b = 0; a < 7; a++, b += 2){
    console.log(a,b)
    }*/

    //Estructura con While
    let a = 0;
    let b = 0;

    while (a < 7) {
    document.getElementById("parraf"+(a, b));
    a++;
    b += 2;
    } 
    
}

//Ejercicio 15

//Ejercicio 16

//Ejercicio 17
function fibo() {
a=1	
b=1
c=1 
do{	
    document.write(c+"<br>")
c=a+b
a=b	
b=c	
}
while(c<=1700)

}