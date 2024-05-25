let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Adicionando a função para trocar de slide automaticamente a cada 8 segundos
setInterval(function() {
  plusSlides(1); // Chama a função plusSlides com o argumento 1 para avançar o slide
}, 8000); // 8000 milissegundos = 8 segundos
