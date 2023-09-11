import JustValidate from 'just-validate';

const checkoutFormValidation = () => {
    if (document.getElementById('checkout-form')) {
        const validator = new JustValidate('#checkout-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('selectCity') &&
            validator.addField('#selectCity', [
                {
                    rule: 'required',
                    errorMessage: "Заповніть це поле",
                },
            ]);

        document.getElementById('inputStreet') &&
            validator.addField('#inputStreet', [
                {
                    rule: 'required',
                    errorMessage: "Заповніть це поле",
                },
            ]);

        document.getElementById('inputBuilding') &&
            validator.addField('#inputBuilding', [
                {
                    rule: 'required',
                    errorMessage: "Заповніть це поле",
                },
            ]);
    
        document.getElementById('inputName') &&
            validator.addField('#inputName', [
                {
                    rule: 'required',
                    errorMessage: "Заповніть це поле",
                },
            ]);
    
        document.getElementById('inputPhone') &&
            validator.addField('#inputPhone', [
                {
                    rule: 'required',
                    errorMessage: "Заповніть це поле",
                },
            ]);
    }
}

export default checkoutFormValidation;