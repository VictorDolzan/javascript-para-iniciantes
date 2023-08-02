export default function initSmoothScroll() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
    linksInternos.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            /* FORMA ALTERNATIVA
            let topo = section.offsetTop;
            window.scrollTo({
                top: topo,
                behavior: 'smooth'
            });*/
        })
    })
}