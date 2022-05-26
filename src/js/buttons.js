var idDialogo = 0;
var dialogos = [];
dialogos[0] = "Dialogo 2";
dialogos[1] = "Dialogo 3";
dialogos[2] = "Dialogo 4";

const buttonNext = () => { 
    if(idDialogo != 3) {
        document.getElementById('dialogo').innerHTML = dialogos[idDialogo];
        idDialogo++;
    }
    else {
        var elemento = document.querySelector("#dialogo");
        elemento.parentNode.removeChild(elemento);
        elemento = document.querySelector("#next");
        elemento.parentNode.removeChild(elemento);
        var html = '<button id="start" onclick="start()">Start</button>';
        document.querySelector('#box').innerHTML = html;
    }
    
  };

  const start = () => { 
    object.Extra();
    
  };