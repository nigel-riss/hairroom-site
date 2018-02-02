import $ from 'jquery';


class Carousel {
    constructor() {
        $(document).ready(function(){
            $('.owl-carousel').owlCarousel();
          });
    }
}
export default Carousel;
