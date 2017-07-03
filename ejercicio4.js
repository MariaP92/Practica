var n= prompt("Ingrese un numero");
var temp="";
strNum = "";

dibujarTriangulo(n);

function dibujarTriangulo(n){
    for(var j=0; j<n; j++){
      var sp=espacios(n-(j+1));//n-(i+1);
      temp += (j+1);
      console.log(sp + temp);
    }
}

function espacios(numsp){
  var str =" ";
  var cadenaStr = " ";
  for(i=0; i<numsp; i++){
     cadenaStr += str;
  }
  return cadenaStr;
}
