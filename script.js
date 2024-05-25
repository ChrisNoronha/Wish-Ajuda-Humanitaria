//funções responsáveis pelo carrossel
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

setInterval(function() {
  plusSlides(1); 
}, 8000); //8 segundos para troca de slides

//funções responsáveis pelo carrossel(fim)

//função responsável pelo botão de copiar
function copyToClipboard() {
    const textToCopy = document.getElementById("myText").innerText;
    navigator.clipboard.writeText(textToCopy);
    alert("Dados da doação copiados: " + textToCopy);
}
//função responsável pelo botão de copiar(fim)