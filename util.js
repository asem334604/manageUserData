class Util {
    static checkIfPosNum(num) {
        if (num && !isNaN(+num) && num !== '' && num > 0)
            return num;
        else
            return -1;
    }

    static checkIfIsFilled(value) {
        if(value && value !== '')
            return value;
        else
            return  'No value';
    }

    static validateFormFields(formElement){
        Array.from(formElement.elements).forEach((element) => {
            if(element.type === 'text')
               element.value =  Util.checkIfIsFilled(element.value);
            else if(element.type === 'number')
                element.value = Util.checkIfPosNum(element.value);
        })
    }
}
