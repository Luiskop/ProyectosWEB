// import darkTheme from "./tema_oscuro.js";
import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import webCam from "./deteccion_webcam.js";
import searchFilters from "./filtro_busquedas.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpsy from "./scroll_espia.js";
import winner from "./sorteo.js";
import { moveBall, shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/sonidoAlarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "Feb 24 2024",
    "Feliz cumple bro, veo que si cumpliste lo de ser un chingon"
  );

  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&ab_channel=jonmircha" target="_blank" rel="noopener"> ver video </a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/x41cEExx1voCKKiT8" target="_blank" rel="noopener"> ver mapa </a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674.5381124329334!2d-106.89275602493431!3d23.917297201918455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86a260663b65ca41%3A0x8caf5b78c50adf83!2sLas%20Ollas!5e0!3m2!1ses-419!2smx!4v1678681193154!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  searchFilters(".card-filter", ".card");
  winner("#winner-btn", ".player");
  slider();
  scrollSpsy();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
// darkTheme(".dark-theme-btn", "dark-mode");
