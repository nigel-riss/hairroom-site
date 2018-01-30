import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.mainMenu = $(".main-menu");
        this.menuIcon = $(".menu-icon");
        this.menuLinks = $(".main-menu__list a");
        this.events();
    }
    events() {
        this.menuIcon.click(
            this.toggleTheMenu.bind(this)
        );
        this.menuLinks.click(
            this.toggleTheMenu.bind(this)
        );
        this.menuLinks.on("tap",
            this.toggleTheMenu.bind(this)
        );
    }
    toggleTheMenu() {
        this.mainMenu.toggleClass("main-menu--shown");
        this.menuIcon.toggleClass("menu-icon--close-x");
    }
}

export default MobileMenu;