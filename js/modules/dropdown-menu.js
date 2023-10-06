import outsideClick from "./outsideClick.js";
export default class DropdownMenu {
    constructor(dropdownMenus) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);

        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add('active');
        outsideClick(element, ['touchstart', 'click'], () => {
            element.classList.remove('active');
        });
    }

    addDropdownMenusEvent(){
        this.dropdownMenus.forEach(menu => {
            ['touchstart', 'click'].forEach(userEvent => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            });
        });
    }

    init(){
        if (this.dropdownMenus.length){
            this.addDropdownMenusEvent();
        }
        return this;
    }
}
