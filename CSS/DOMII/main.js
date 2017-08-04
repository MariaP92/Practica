var btnGenerar = document.getElementById("btnGenerar");
var tablaDIV = document.getElementById("tablero");
btnGenerar.onclick = function (event) {
        var textGenerar = parseInt(document.getElementById("txtGenerar").value);
        
        
        var tblBody = document.createElement("tbody");
        var tabla = document.createElement("table");

        for(var i=0; i<textGenerar; i++){
            var filas = document.createElement("tr");
            event.target.classList.toggle("color");
            //filas.bgColor = "black";
            for(var j=0; j<textGenerar; j++){
                var celda = document.createElement("td");
                celda.width = "50px";
                celda.height = "50px";
                if(i %2==0 && j%2 != 0){
                   filas.bgColor="black";
                   celda.bgColor="white";
                }


                filas.appendChild(celda);
            }
            tblBody.appendChild(filas);
        }
        tabla.appendChild(tblBody);
        tablaDIV.appendChild(tabla);
        tabla.setAttribute("border", "2");
    
}

function limpiar(){
    var tablaDIV = document.getElementById("tablero");
    tablaDIV.innerHTML = "";
}

