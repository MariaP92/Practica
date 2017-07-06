var n= prompt("Ingrese un numero");
var temp="";
strNum = "";

dibujarTriangulo(n);

function dibujarTriangulo(n){
    for(var j=0; j<n; j++){
      var sp=espacios(n-(j+1));//n-(i+1);
      temp += ("X");
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

/*function espacios (numsp)
{
  var str = "";
  for (var i = 0; i < numsp; i++){
    str += " ";
  }
  return str;
}

for (var i = 0; i < n; i++) {
  var sp = espacios (n - (i+1));
  var content = "";
  for (j = 0; j < i+i; j++)
    content +=  j;
  console.log(sp + content);
}
*/
