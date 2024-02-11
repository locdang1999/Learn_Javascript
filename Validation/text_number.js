const codePattern = /^([a-zA-Z0-9])+$/;
const namePattern = /^([a-zA-Z0-9 ])+$/;
const textPattern = /^([a-zA-Z ])+$/;
const textCodePattern = /^([a-zA-Z])+$/;
const numberPattern = /^([0-9])+$/;
const zipPattern = /^([0-9-+ ])+$/;


const txtParentPartn = {
    id: 'txtParentPartn',
    view: 'text',
    name: 'prntPrnrCd',
    label: 'Parent Partner',
    labelWidth: 45,
    labelAlign: 'left',
    labelPosition: 'top',
    inputHeight: INPUT_HEIGHT,
    width: 180,
    attributes: {maxlength: 20},
    css: {'text-transform': 'uppercase'},
    on: {
        onTimedKeyPress() {
            let currentValue = this.getValue();
            if (!(codePattern.test(currentValue))) {
                this.setValue(currentValue.replace(/[^a-zA-Z0-9]/g, '').toUpperCase());
            } else {
                this.setValue(currentValue.toUpperCase());
            }
        },
    },
};


const txtCeoNm = {
    id: 'txtCeoNm',
    view: 'text',
    name: 'ceoNm',
    label: 'CEO',
    labelWidth: 45,
    labelAlign: 'left',
    labelPosition: 'top',
    inputHeight: INPUT_HEIGHT,
    width: 200,
    attributes: {maxlength: 100},
    css: {'text-transform': 'uppercase'},
    on: {
        onTimedKeyPress() {
            let currentValue = this.getValue();
            if (!(textPattern.test(currentValue))) {
                this.setValue(currentValue.replace(/[^a-zA-Z ]/g, ''));
            }
        },
    },
};