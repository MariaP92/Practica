function e(n) {
  var s = "";
  for (var i = 0; i < n; i++) 
    s += " ";
  return s;
}

function l (n) {
  var s = "";
  for (var i = 0; i < n; i++) 
    s += "*";
  return s;
}
  
function f ( n, z ) {
  if (n == z)
    return l(n /3) + e ( n / 3) + l (n / 3) 
  else
    return f(n / 3, z) + e(n / 3) + f(n / 3, z);
 
}

var T = 4;
//var n = 81;
var n = 27;

var matrix = [[], [], [], []];

console.log ( l (n) )

console.log ( f (n, 27) ); 
console.log ( f (n, 9) ); 
console.log ( f (n, 3) ); 
console.log ( f (n, 9) );
console.log ( f (n, 27) );

console.log ( l (n) )
/*
var T = 4;
var n = 9;

//var matrix = [[], [], [], []];

console.log ( l (n) );
console.log ( l(n /3) + e ( n / 3) + l (n / 3) ) ;
console.log ( f (n) ); 

console.log ( l(n /3) + e ( n / 3) + l (n / 3) ) ;
console.log ( l (n) );*/