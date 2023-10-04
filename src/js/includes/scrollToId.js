import SmoothScroll from 'smooth-scroll/src/js/smooth-scroll/smooth-scroll';
import Gumshoe from 'gumshoejs/src/js/gumshoe/gumshoe'

const scrollToId = () => {
    // const header = document.querySelector('.header');
    const headerHeight = document.querySelector('.header').offsetHeight;

    new SmoothScroll('[data-scroll]', { 
        speed: 100,
        speedAsDuration: true,
        offset: headerHeight,
        updateURL: false,
    });
    
    new Gumshoe('.menu a', {
        offset: headerHeight,
        navClass: 'is-active',
    });

    new Gumshoe('.bottom-menu a', {
        offset: headerHeight,
        navClass: 'is-active',
    });
}

export default scrollToId;