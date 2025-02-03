/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


document.getElementById("btn_si").addEventListener("click", function() {
    document.getElementById("valentin-container").style.display = "none";
    document.getElementById("mensaje-tierno").style.display = "block";
    document.getElementById("gif1").style.display = "block";
    document.getElementById("gif2").style.display = "block";
    document.body.style.backgroundImage = "url('https://i.ibb.co/d4h0LtK8/Pantalla3.jpg')"; // Reemplaza con la URL de tu imagen
    generarCorazones();
});

document.getElementById("btn_no").addEventListener("click", function() {
    alert("¡Oyeee entonces no quieres 😔 di que si por favor");
});

function generarCorazones() {
    let cantidad = 30;
    for (let i = 0; i < cantidad; i++) {
        let corazon = document.createElement("div");
        corazon.className = "corazon";
        document.body.appendChild(corazon);
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDuration = Math.random() * 2 + 3 + "s";
        corazon.innerHTML = "❤️";
    }
}

// Estilo para los corazones cayendo
const estilo = document.createElement("style");
estilo.innerHTML = `
    .corazon {
        position: absolute;
        top: 0;
        font-size: 24px;
        opacity: 0.8;
        animation-name: caer;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes caer {
        0% {
            transform: translateY(-100px);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(estilo);
