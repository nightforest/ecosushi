import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const photoSwipe = () => {
    const lightbox = new PhotoSwipeLightbox({
        gallery: '#product-image',
        children: 'a',
        pswpModule: () => import('photoswipe')
    });

    lightbox.init();
}

export default photoSwipe;