var arregloDado = [15,  29, 78, 29, 40, 20, 18, 100, 78, 68];

var arrPares = [];
var arrImpares = [];

arrParImpar(arregloDado);

function arrParImpar(arregloD){
  for(var i = 0; i < arregloD.length; i++){
    if(i % 2 == 0){
      arrPares.push(arregloD[i]);
    }
    else{
      arrImpares.push(arregloD[i]);
    }
  }
  document.write("Elementos de posición par: " + arrPares +
                 "<br />Elementos de posición Impar: " + arrImpares);
}
