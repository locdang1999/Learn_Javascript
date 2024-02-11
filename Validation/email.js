const emailPattern = /^([a-zA-Z0-9@.])+$/;

const txtEmail = {
    id: 'txtEmail',
    view: 'text',
    name: 'prnrEmlAddr',
    label: 'Email',
    labelAlign: 'left',
    labelWidth: 45,
    labelPosition: 'top',
    inputHeight: INPUT_HEIGHT,
    width: 350,
    disabled: false,
    attributes: {maxlength: 100},
    css: {'text-transform': 'uppercase'},
    on: {
        onBlur() {
            let currentValue = this.getValue();
            if (!webix.rules.isEmail(currentValue) && currentValue !== '') {
                webix.alert({
                    title: "WARNING",
                    text: "Email is Invalid",
                    type: "alert-warning",
                    container: $$(curPgmName).$view
                });
                this.setValue('');
            }
        },
        onTimedKeyPress() {
            let currentValue = this.getValue();
            if (!(emailPattern.test(currentValue))) {
                this.setValue(currentValue.replace(/[^a-zA-Z0-9@.]/g, ''));
            }
        },
    },
};