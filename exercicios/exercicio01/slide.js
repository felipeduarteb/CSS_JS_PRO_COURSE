class slideProjetos {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="slide"]`);
        this.active = 0;
        this.init();
    }

    activeSlide(index) {
        this.active = index;
        this.items.forEach ((item) => item.classList.remove('active'));
        this.items[index].classList.add('active');
    }

    prev() {
        if(this.active > 0){
            this.activeSlide(this.active -1);
        } else {
            this.activeSlide(this.items.length -1);
        } 
    }

    next() {
        if(this.active < this.items.length -1){
            this.activeSlide(this.active +1);
        } else {
            this.activeSlide(0);
        }
    }

    addNavigation() {
        const prevBtn = this.slide.querySelector('.prev');
        const nextBtn = this.slide.querySelector('.next');
        prevBtn.addEventListener('click', this.prev)
        nextBtn.addEventListener('click', this.next);
    }

    init() {
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.activeSlide(0);
        this.addNavigation();
    }
}

new slideProjetos('slide');