export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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
