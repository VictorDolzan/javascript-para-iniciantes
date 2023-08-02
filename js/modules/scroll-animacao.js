export default function animaScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;
        function initScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if (isSectionVisible) {
                    section.classList.add('ativo');
                }
            });
        }
        initScroll();
        window.addEventListener('scroll', initScroll);
    }
}