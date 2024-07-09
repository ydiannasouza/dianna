document.addEventListener('DOMContentLoaded', function() {
    // Buscar os dados do Local Storage
    var jsonData = JSON.parse(localStorage.getItem('aniversariante'));

    // Verificar se os dados foram encontrados
    if (jsonData) {
        // Exibir nome, idade e mensagem
        document.getElementById('nome').textContent = jsonData.nome;
        document.getElementById('idade').textContent = jsonData.idade;
        document.getElementById('mensagem').textContent = jsonData.mensagem;
    } else {
        console.error('Dados do aniversariante não encontrados no Local Storage.');
    }

    // Configurar o slideshow
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slides = document.getElementsByClassName('mySlides');
        var dots = document.getElementsByClassName('dot');
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = 'block';
        setTimeout(showSlides, 2000); // Troca de imagem a cada 2 segundos
    }
});
