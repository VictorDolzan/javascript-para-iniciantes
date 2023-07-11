function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');

    if (tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeAccordionClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeAccordionClass);
        accordionList[0].nextElementSibling.classList.add(activeAccordionClass);

        function activeAccordion() {
            this.classList.toggle(activeAccordionClass);
            this.nextElementSibling.classList.toggle(activeAccordionClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}

function initSmoothScroll() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
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

function animaScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;
        function initScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if (isSectionVisible) {
                    section.classList.add('ativo');
                }
            })
        }
        initScroll();
        window.addEventListener('scroll', initScroll);
    }
}

initTabNav();
initAccordion();
initSmoothScroll();
animaScroll();
