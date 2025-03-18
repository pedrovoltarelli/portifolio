// Adicione interatividade aqui, se necessário
// Exemplo: Adicionar um efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Função para verificar se uma seção está visível na tela
function isSectionVisible(section) {
    const rect = section.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight * 0.8) && // 80% da altura da tela
        rect.bottom >= (window.innerHeight * 0.2) // 20% da altura da tela
    );
}

// Função para verificar se uma seção está visível na tela
function isSectionVisible(section) {
    const rect = section.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight * 0.8) && // 80% da altura da tela
        rect.bottom >= (window.innerHeight * 0.2) // 20% da altura da tela
    );
}

// Função para adicionar a classe 'visible' às seções visíveis
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isSectionVisible(section)) {
            section.classList.add('visible');
        }
    });
}

// Adiciona um listener para o evento de scroll
window.addEventListener('scroll', handleScroll);

// Executa a função ao carregar a página para verificar seções já visíveis
document.addEventListener('DOMContentLoaded', handleScroll);