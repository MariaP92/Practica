//MATRICES
/*var A = [[1,1,1], [2,2,2]];
var B = [[3,3,3],[2,2,2]];
var C = [[0,0,0],[0,0,0]];

function suma(){
    for (var i=0; i<A.length; i++){
        for(var j=0; j<A[i].length; j++){
            C[i][j]= A[i][j] + B[i][j]; // C[[4,4,4],[4,4,4]];
        }
    }

    console.log(C);
    }

    function multiplicacion (){
    }*/

//INVIERTIR ARREGLO

 var A = [
          [1,1,1],
          [2,2,2]
        ];

var B = [ 
        [2,2,2],
        [3,3,3]
      ];

var C = [ [0,0,0], [0,0,0]];
for (var i=0;  i < A.length; i++) {
  for (var j=0; j < A[i].length; j++) {
      C [i][j] = A[i][j] + B[i][j]; 
  }
}

A = [ [1,1,1,1],
    [2,2,2,2],
    [3,3,3,3],
    [4,4,4,4]] ;

console.log ("hola");
var n = A.length;
var m = A[0].length;

for (var i=0;  i < A.length; i++) {
  var tmp = [];
  for (var j = 0; j < A[i].length; j++)
    tmp.push ( A[j][i] );  
  console.log (tmp);  
}



//ARREGLOS BIDIMENSIONALES?
/*var G = [1,2,3][1,2,1];
var H = [2,2,2][1,1,1];
var F = [0,0,0][0,0,0]

for (var i=0; i<G.length; i++){
    for(var j=0; j<G[i].length; j++){
        F[i][j]= G[i][j] + H[i][j]; // C[4,4,4];
    }
}

console.log(F);*/