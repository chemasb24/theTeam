// Inicializa carrusel de imágenes
const myCarouselElement = document.querySelector('#carrusel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})