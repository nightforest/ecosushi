import JustValidate from 'just-validate';

const promoFormValidation = () => {
    if (document.getElementById('promo-form')) {
        const validator = new JustValidate('#promo-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('inputPromo') &&
            validator.addField('#inputPromo', [
                {
                    rule: 'required',
                    errorMessage: "Заповніть це поле",
                },
            ]);
    }
}

export default promoFormValidation;