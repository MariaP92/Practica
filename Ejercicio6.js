/*
        *
       ***
      *****
     *******
    *      *
   ***    ***
 ******  ******
**************** 

*/


var n= prompt("Ingrese un numero");
var temp="";
strNum = "";

dibujo2(n);


function dibujo1(n){
    console.log("DIBUJO 1: ");
    //triangulo Arriba    
    for (var i = 0; i < n; i++) {
        var s = "";
        for (var j = 1; j <= i + 1; j++) {
           s += "*";
        }
        var e = espacios (n*2 -(i+1));
        for (var j = i; j >= 1; j--) {
            s += "*";
        }
        console.log(e + s);
    }
    //triangulo Abajo-Izq
    for (var i = 0; i < n; i++) {
        var s = "";
        for (var j = 1; j <= i + 1; j++) {
           s += "*";
        }
        var e = espacios (n - i-1);
        for (var j = i; j >= 1; j--) {
            s += "*";
        }
        console.log(e + s + e + e  + s);
    }

}

function dibujo2(n){

    /*var s="", st = ""; 
    var long = 4;
    //e = espacios(n);
    for(var i=0; i<=long; i++){
        s += "-"
        e = espacios(n/3);
        for(var j=0; j<n/3; j++){
            var div = n/3;
            st += "-";
    
        }
        
   }
   console.log(s);
   console.log(st+e+st);
 */
    t=4;
    console.log(pintarLinea(n));
    for (var i=0; i<=t; i++){
        
        
        e = espacios(n/3);
        n = n/3;
        for (var j=0; j<n; j++){
            console.log(pintarLinea(n)+ e + pintarLinea(n) );
            //n=n/3;
        }   
    }
}

function dibujo2_1(n){
    t=4;
    for (var i=0; i<=t; i++){
        console.log(pintarLinea(n));
        n = n/3;
    }

}

function pintarLinea(n){
    var s= "";
    for(var i=0; i<n; i++){
        s += "*";
    }
    return s;

}

function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}