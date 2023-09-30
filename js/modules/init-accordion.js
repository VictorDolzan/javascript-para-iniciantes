export default class Accordion {
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.activeAccordionClass = 'ativo';
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeAccordionClass);
        item.nextElementSibling.classList.toggle(this.activeAccordionClass);
    }

    addAccordionEvent(){
        this.accordionList.forEach((item) => {
            item.addEventListener('click', () => this.toggleAccordion(item))
        })
    }

    init(){
        if (this.accordionList.length){
            this.toggleAccordion(this.accordionList[0]);
            this.addAccordionEvent();
        }
    }
}
