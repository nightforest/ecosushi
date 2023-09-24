const deliveryRadio = () => {
    const radioButtons = document.querySelectorAll('input[name="delivery-radio"]');
    

    radioButtons?.forEach(item => {
        item.addEventListener('change', function() {
            const currentGroup = document.querySelector('.form__delivery-group.is-visible');
            const radioValue = item.getAttribute('value');
            const newGroup = document.querySelector(`[data-delivery="${radioValue}"]`);

            currentGroup?.classList.remove('is-visible');
            newGroup?.classList.add('is-visible');
        });
    });
}

export default deliveryRadio;