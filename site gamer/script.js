// script.js - Funcionalidades adicionais

$(document).ready(function() {
    // Efeito suave ao rolar para seções
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 800);
    });

    // Botão voltar ao topo
    $('.voltar-topo').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Mostrar/ocultar botão voltar ao topo
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.voltar-topo').fadeIn();
        } else {
            $('.voltar-topo').fadeOut();
        }
    });

    // Animação ao adicionar ao carrinho
    $('.produto button').on('click', function() {
        const produto = $(this).closest('.produto');
        const nomeProduto = produto.find('h3').text();
        
        produto.animate(
            { backgroundColor: '#f1f8ff' },
            200,
            function() {
                produto.animate({ backgroundColor: '#ffffff' }, 200);
            }
        );
        
        alert(`Você adicionou ${nomeProduto} ao carrinho!`);
    });

    // Atualizar os produtos mais vendidos conforme a imagem
    function atualizarProdutosMaisVendidos() {
        const produtos = [
            {
                nome: "Jogo 1",
                descricao: "Jogo do ano",
                preco: "R$ 182.00"
            },
            {
                nome: "Jogo 2",
                descricao: "Jogo top de linha",
                preco: "R$ 132.00"
            },
            {
                nome: "Jogo 3",
                descricao: "Melhor de todos",
                preco: "R$ 172.00"
            }
        ];

        $('.produto').each(function(index) {
            if (index < produtos.length) {
                $(this).find('h3').text(produtos[index].nome);
                $(this).find('p:first').text(produtos[index].descricao);
                $(this).find('.preco').text(produtos[index].preco);
            }
        });
    }

    // Atualizar footer conforme a imagem
    function atualizarFooter() {
        $('footer p').html('<strong>Desenvolvimento por DEV-jaimison</strong>');
        $('.voltar-topo').text('voltar ao topo');
    }

    // Chamar as funções de atualização
    atualizarProdutosMaisVendidos();
    atualizarFooter();
});
// script.js - Funcionalidade do Carrossel

 {
    // Inicializa o carrossel
    function initCarousel() {
        const $banners = $('.banner-carousel .banner');
        const $indicators = $('.carousel-indicators');
        let currentIndex = 0;
        let interval;

        // Cria os indicadores
        $banners.each(function(index) {
            $indicators.append(`<span data-index="${index}"></span>`);
        });
        
        // Ativa o primeiro indicador
        $('.carousel-indicators span').first().addClass('active');

        // Função para mostrar banner específico
        function showBanner(index) {
            $banners.removeClass('active');
            $banners.eq(index).addClass('active');
            $('.carousel-indicators span').removeClass('active');
            $('.carousel-indicators span').eq(index).addClass('active');
            currentIndex = index;
        }

        // Avança para o próximo banner
        function nextBanner() {
            let nextIndex = (currentIndex + 1) % $banners.length;
            showBanner(nextIndex);
        }

        // Inicia o carrossel automático
        function startAutoCarousel() {
            interval = setInterval(nextBanner, 5000);
        }

        // Para o carrossel automático
        function stopAutoCarousel() {
            clearInterval(interval);
        }

        // Event listeners
        $('.carousel-control.next').click(function() {
            stopAutoCarousel();
            nextBanner();
            startAutoCarousel();
        });

        $('.carousel-control.prev').click(function() {
            stopAutoCarousel();
            let prevIndex = (currentIndex - 1 + $banners.length) % $banners.length;
            showBanner(prevIndex);
            startAutoCarousel();
        });

        $('.carousel-indicators span').click(function() {
            stopAutoCarousel();
            const index = $(this).data('index');
            showBanner(index);
            startAutoCarousel();
        });

        // Pausa quando o mouse está sobre o carrossel
        $('.banner-carousel').hover(
            function() { stopAutoCarousel(); },
            function() { startAutoCarousel(); }
        );

        // Inicia o carrossel
        startAutoCarousel();
    }

    // Inicializa o carrossel
    initCarousel();

    // Restante do seu código existente...
};