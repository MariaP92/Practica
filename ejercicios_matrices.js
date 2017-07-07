var cero = 0;
var arr=[];
var subarr=[];
var n= prompt("Ingrese un valor n");
var num = parseInt(n);
llenar();

function crearMatriz(){
    for (i=0; i<num; i++){
        arr[i]=[];
        for(var j=0;j<num; j++){
            arr[i][j] =0;
        }
         arr[i][num-i-1] = 1; 
    }
   // console.log(arr);
    return arr;
}


function llenar(){
    var arreglo = crearMatriz();
    for (i=0; i<arreglo.length; i++){
       for(j=num-1; j>num-i; j++){
          arreglo[i][j] = i-1;
         //num--;
       }
    }
    console.log(arreglo);
}