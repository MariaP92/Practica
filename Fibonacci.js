function f(n){
    if(n==1)
        return 1;
    else
        return f(n-1) +1;
}

//console.log(f(4));

function fibo(n){
    //for(var i=0; i<n; i++)
    //{
        if(n==0)
            return 0;
        else if(n==1)
            return 1;
        else
            return (fibo(n-1) + fibo(n-2));
    //}
}
console.log(lineas(27));

function lineas(n){
    var s = " ";
    //var e = espacios(n/3);
    if (n==1){
        return "*";
    }
    else{

        return (lineas(n/3) +  espacios(n/3) + lineas(n/3));         
    }

}

function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) 
    s += " ";
  return s;
}

