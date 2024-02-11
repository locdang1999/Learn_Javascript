//https://www.codegrepper.com/code-examples/javascript/how+to+validate+url+in+javascript

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  const txtWeb = {
    id: 'txtWeb',
    view: 'text',
    name: 'ofcUrlAddr',
    label: 'Website',
    labelWidth: 45,
    labelAlign: 'left',
    labelPosition: 'top',
    inputHeight: INPUT_HEIGHT,
    width: 270,
    attributes: {maxlength: 400},
    css: {'text-transform': 'uppercase'},
    on: {
        onBlur() {
            let currentValue = this.getValue();
            if(!validURL(currentValue) && currentValue!==''){
                webix.alert({
                    title: "WARNING",
                    text: "Website is Invalid",
                    type: "alert-warning",
                    container: $$(curPgmName).$view
                });
                this.setValue('');
            };
        }
    },
};