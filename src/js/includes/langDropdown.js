const langDropdown = () => {
    const body = document.querySelector('body');
    const lang = document.querySelector('.lang');
    const langToggle = lang?.querySelector('.lang__toggle');

    langToggle?.addEventListener('click', function() {
        lang?.classList.toggle('is-active');
    });

    body.addEventListener('click', e => {
        if (!e.target.closest('.lang')) {
            lang?.classList.remove('is-active');
        }
    });
}

export default langDropdown;