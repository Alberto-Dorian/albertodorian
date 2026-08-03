function compartir() {

    if (navigator.share) {

        navigator.share({
            title: "Baila Sin Control",
            text: "Escucha el nuevo sencillo de Alberto Dorian",
            url: window.location.href
        });

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("¡Link copiado!");

    }

}


/* Animación de aparición */

const elementos = document.querySelectorAll(".button,.song,.bio,.video-box");

const mostrar = () => {

    elementos.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 60) {

            el.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll", mostrar);

mostrar();


/* Partículas doradas */

const particles = document.getElementById("particles");

for (let i = 0; i < 35; i++) {

    const p = document.createElement("span");

    p.style.position = "fixed";

    p.style.width = Math.random() * 5 + 2 + "px";

    p.style.height = p.style.width;

    p.style.background = "#FFD76A";

    p.style.borderRadius = "50%";

    p.style.left = Math.random() * 100 + "%";

    p.style.top = Math.random() * 100 + "%";

    p.style.opacity = Math.random() * .45;

    p.style.pointerEvents = "none";

    p.style.zIndex = "1";

    p.style.boxShadow = "0 0 12px gold";

    p.style.animation =
        "float" +
        (Math.floor(Math.random() * 5) + 6) +
        "s linear infinite";

    particles.appendChild(p);

}


/* Animación flotante */

const style = document.createElement("style");

style.innerHTML = `

@keyframes float6{

0%{transform:translateY(0)}

100%{transform:translateY(-140px)}

}

@keyframes float7{

0%{transform:translateY(0)}

100%{transform:translateY(-180px)}

}

@keyframes float8{

0%{transform:translateY(0)}

100%{transform:translateY(-220px)}

}

@keyframes float9{

0%{transform:translateY(0)}

100%{transform:translateY(-260px)}

}

@keyframes float10{

0%{transform:translateY(0)}

100%{transform:translateY(-320px)}

}

`;

document.head.appendChild(style);


/* Efecto brillo en la portada */

const portada = document.querySelector(".cover");

setInterval(() => {

    portada.animate([

        {

            filter: "brightness(1)"

        },

        {

            filter: "brightness(1.2)"

        },

        {

            filter: "brightness(1)"

        }

    ], {

        duration: 2500

    });

}, 3000);

/*==============================
CARRUSEL DE PORTADAS
==============================*/

const covers = document.querySelectorAll(".cover");

let coverIndex = 0;

if (covers.length > 1) {

    setInterval(() => {

        covers[coverIndex].classList.remove("active");

        coverIndex++;

        if (coverIndex >= covers.length) {
            coverIndex = 0;
        }

        covers[coverIndex].classList.add("active");

    }, 4000);

}
