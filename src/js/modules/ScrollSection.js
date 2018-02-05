import $ from 'jquery';

class ScrollSection {
    constructor() {
        this.link = $(".main-menu__list a");
        this.events();
    }

    events() {
        this.link.click(function(e) {
            e.preventDefault();
            var section = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(section).offset().top
            }, 1000);
        });
    }
}

export default ScrollSection;