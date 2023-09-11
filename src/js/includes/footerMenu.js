const footerMenu = () => {
    const accordionAll = document.querySelectorAll('.footer-menu');

    accordionAll?.forEach(item => {
        const toggle = item.querySelector('.footer-menu__toggle');
        const dropdown = item.querySelector('.footer-menu__list');
        
        toggle?.addEventListener('click', () => {
            toggle.closest('.footer-menu').classList.toggle('is-open');

            toggle.closest('.footer-menu.is-open')
                ? dropdown.style.maxHeight = dropdown.scrollHeight + 'px'
                : dropdown.style.maxHeight = null;
        });

        toggle?.closest('.footer-menu.is-open')
            ? dropdown.style.maxHeight = dropdown.scrollHeight + 'px'
            : dropdown.style.maxHeight = null;
    });
}

export default footerMenu;