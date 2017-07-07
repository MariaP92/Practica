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
         arr[i][num-i-1] = num; //Esta linea resume la función llenar;
    }
   // console.log(arr);
    return arr;
}


function llenar(){
    var arreglo = crearMatriz();
    for (i=0; i<arreglo.length; i++){
        for(j=0; j<n-i-1; j++){
            arreglo[i][j] = j+1+i;
        }
    }


    console.log(arreglo);
}


/*for (i=0; i<arr.length; i++){
    for(j=arr[i].length; j>n-i-1; j--){
        arr[i][j-1] = n;
        n--;
    }
}*/





