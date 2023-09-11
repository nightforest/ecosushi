const bottomMenu = () => {
    const linkAll = document.querySelectorAll('.bottom-menu__link--nav');
    

    linkAll?.forEach(item => {
        item.addEventListener('click', function(e) {
            const activeLink = document.querySelector('.bottom-menu__link--nav.is-active');
            e.preventDefault();

            activeLink?.classList.remove('is-active');
            item.classList.add('is-active');
        });
    });
}

export default bottomMenu;