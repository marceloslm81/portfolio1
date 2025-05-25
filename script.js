document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburguer
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNavigation = document.querySelector('#primary-navigation');

    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = primaryNavigation.getAttribute('data-visible') === 'true';
        primaryNavigation.setAttribute('data-visible', !isExpanded);
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Links de navegação com rolagem suave
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.main-header').offsetHeight,
                    behavior: 'smooth'
                });

                // Fechar o menu mobile após clicar em um link
                if (primaryNavigation.getAttribute('data-visible') === 'true' && window.innerWidth < 768) {
                    primaryNavigation.setAttribute('data-visible', false);
                    mobileNavToggle.setAttribute('aria-expanded', false);
                }
            }
        });
    });

    // Modais de Portfólio
    const projectCards = document.querySelectorAll('.project-card');
    const modals = document.querySelectorAll('.modal');
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const modalTarget = this.getAttribute('data-modal-target');
            const modal = document.querySelector(modalTarget);
            if (modal) {
                modal.style.display = 'block';
                document.body.classList.add('modal-open'); // Adiciona classe para desabilitar scroll do fundo
            }
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open'); // Remove classe para habilitar scroll do fundo
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });

    // Botão Voltar ao Topo
    const scrollTopButton = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Botão Flutuante do WhatsApp (funcionalidade básica - você precisará adicionar seu número)
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/5511943219223'; // Substitua pelo seu número de WhatsApp
    whatsappButton.classList.add('whatsapp-button');
    whatsappButton.target = '_blank';
    whatsappButton.rel = 'noopener noreferrer';
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappButton);
});