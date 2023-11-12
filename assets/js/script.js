$(function () {
  $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            $('html,body').animate({
                scrollTop: $(gato).offset().top - 100
            }, 800, function () {
                window.location.hash = gato - 100;
            });

            function efectoHabilidades() {
                var habilidades = document.getElementById("habilidades");
                var distancia_habilidades = windows.innrHeight = habilidades.getBoundingClientRect().top;
                if (distancia_habilidades >= 300) {
                    let habilidades = document.getElementsByClassName("progreso");

                    habilidades[1].classList.add("comunicacion");
                    habilidades[2].classList.add("creatividad");
                    habilidades[3].classList.add("flexibilidad");
                    habilidades[4].classList.add("trabajoenequipo");

            
                windows.onscroll = function () {
                    efectoHabilidades();

                };
            }
        }
    });
});
