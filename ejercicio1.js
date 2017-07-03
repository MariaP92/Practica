//EJERCICIO 1 - MIN Y MAX
num1 = prompt("Ingrese el primer numero");
num2 = prompt("Ingrese el segundo numero");
num3 = prompt("Ingrese el tercer numero");

minMax(num1,num2,num3);

function minMax(num1,num2,num3){
  n1 = parseInt(num1);
  n2 = parseInt(num2);
  n3 = parseInt(num3);
  //console.log(n1 + " "+ n2 + " "+ n3)
  if(n1<n2){
    if(n2<n3){
      document.write("El menor numero es: " + n1 +
                     "<br />El mayor numero es: " + n3);
    }
    else if(n1<n3){
      document.write("El menor numero es: " + n1 +
                    "<br />El mayor numero es: " + n2);
    }
    else{
      document.write("El menor numero es: " + n3 +
                     "<br />El mayor numero es: " + n2);
    }
  }
  else if(n2<n3){
    if(n1<n3){
      document.write("El numero menor es: " + n2 +
                     "<br />El numero mayor es: " + n3);
    }
    else{
      document.write("El numero menor es: " + n2 +
                     "<br />El numero mayor es: " + n1);
    }
  }
  else{
    document.write("El numero menor es: " + n3 +
                   "<br />El numero mayor es: " + n1);
  }
}
