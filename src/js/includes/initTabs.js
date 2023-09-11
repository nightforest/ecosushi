import Tabs from './tabs';

const initTabs = () => {
    const tabsAll = document.querySelectorAll('[data-tabs]');

    tabsAll?.forEach(item => {
        const tabID = item.getAttribute('data-tabs');
        
        if (window.innerWidth < 768) {
            new Tabs(tabID, {
                active: 0,
                transition: 300,
            });
        }
    });
}

export default initTabs;