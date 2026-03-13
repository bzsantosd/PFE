
        lucide.createIcons();

        let progressInterval;

        function viewStory(element, username, imgPath) {
            element.classList.add('viewed');
            const modal = document.getElementById('story-modal');
            const modalImg = document.getElementById('modal-story-img');
            const modalUserImg = document.getElementById('modal-user-img');
            const modalUserTxt = document.getElementById('modal-username');
            const progressFill = document.querySelector('.progress-fill');

            // Preenche dados
            modalImg.src = imgPath;
            modalUserImg.src = imgPath;
            modalUserTxt.innerText = username;
            document.getElementById('reply-text').placeholder = `Responder a ${username}...`;

            // Abre modal e reseta progresso
            modal.style.display = 'flex';
            progressFill.style.width = '0%';
            
            let width = 0;
            clearInterval(progressInterval);
            progressInterval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(progressInterval);
                    closeStory();
                } else {
                    width += 1;
                    progressFill.style.width = width + '%';
                }
            }, 50); // 5 segundos de duração total
        }

        function closeStory() {
            document.getElementById('story-modal').style.display = 'none';
            clearInterval(progressInterval);
        }

        // Lógica do Carrossel
        let currentSlide = 0;
        function moveCarousel(btn, direction) {
            const track = btn.parentElement.querySelector('.carousel-track');
            const slides = track.querySelectorAll('img');
            const totalSlides = slides.length;
            
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            const offset = -currentSlide * 100;
            track.style.transform = `translateX(${offset}%)`;
        }
   
    function viewStory(element, username, imgPath, profileImgPath) {
    element.classList.add('viewed');
    const modal = document.getElementById('story-modal');
    const modalImg = document.getElementById('modal-story-img');
    const modalUserImg = document.getElementById('modal-user-img');
    const modalUserTxt = document.getElementById('modal-username');
    const progressFill = document.querySelector('.progress-fill');

    // Preenche dados corrigidos
    modalImg.src = imgPath;         // Imagem grande do Story
    modalUserImg.src = profileImgPath; // Imagem pequena do Perfil (Avatar)
    modalUserTxt.innerText = username;
    document.getElementById('reply-text').placeholder = `Responder a ${username}...`;

    // Abre modal e reseta progresso
    modal.style.display = 'flex';
    progressFill.style.width = '0%';
    
    let width = 0;
    clearInterval(progressInterval);
    progressInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(progressInterval);
            closeStory();
        } else {
            width += 1;
            progressFill.style.width = width + '%';
        }
    }, 50); 
}
// Espera o Lucide criar os ícones e adiciona os eventos de clique
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os corações e bookmarks do feed
    const actions = document.querySelectorAll('[data-lucide="heart"], [data-lucide="bookmark"]');

    actions.forEach(icon => {
        icon.addEventListener('click', function() {
            const type = this.getAttribute('data-lucide');
            
            if (type === 'heart') {
                this.classList.toggle('heart-active');
            } else if (type === 'bookmark') {
                this.classList.toggle('bookmark-active');
            }
        });
    });
});

