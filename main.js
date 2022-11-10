let y = 0;
let x = 0;

let Personaje = document.getElementById("Personaje");

function Movimiento(event){
    if(event.keyCode == '39'){
        x = x + 50;
        Personaje.style.left = x + 'px';
        document.getElementById("Personaje").src = "Imagenes/G_Derecha.png"

    }

    if (event.keyCode == '37'){
        x = x -50;
        Personaje.style.left = x + 'px';
        document.getElementById("Personaje").src = "Imagenes/G_Izquierda.png"
    }

    if (event.keyCode == '38'){
        y = y + 50;
        Personaje.style.top = (-y) + 'px';
    }

    if (event.keyCode == '40'){
        y = y - 50;
        Personaje.style.top = (-y) + 'px';
    }
}


//window.addEventListener('Personaje', Movimiento, true);

window.onkeyup = Movimiento;
