//funções responsáveis pelo carrossel

// Function to show next slide
function showNextSlide(carouselId) {
    var carousel = document.getElementById(carouselId);
    var activeSlide = carousel.querySelector('.slide.active');
    var nextSlide = activeSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = carousel.firstElementChild;
    }
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');
}

// Set intervals for carousels
setInterval(function() {
    showNextSlide('carousel1');
}, 8000); // Change slide every 8 seconds

setInterval(function() {
    showNextSlide('carousel2');
}, 8000); // Change slide every 8 seconds
//funções responsáveis pelo carrossel(fim)

//função responsável pelo botão de copiar
function copyToClipboard() {
    const textToCopy = document.getElementById("myText").innerText;
    navigator.clipboard.writeText(textToCopy);
    alert("Dados da doação copiados: " + textToCopy);
}
//função responsável pelo botão de copiar(fim)

   // Carrega a API do YouTube
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Variável para armazenar a referência ao player
    var player;

    // Função chamada quando a API do YouTube é carregada
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '360', // Altura do player
            width: '640', // Largura do player
            videoId: 'b_N3rSNg6HQ', // ID do vídeo do YouTube que você deseja reproduzir
            playerVars: {
                'autoplay': 1, // Reproduz automaticamente o vídeo quando o player é carregado
                'controls': 1, // Mostra os controles do player
                'rel': 0, // Não mostra vídeos relacionados ao final
                'showinfo': 0 // Não mostra informações do vídeo
            }
        });
    }
