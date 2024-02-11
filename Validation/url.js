//Get value Url
function getUrlVars(url) {
    var vars = {};
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
};

//set url
async function openPartnerEnty(statusOpen, data) {
    if (statusOpen === 'N') {
        await loadNewBodyLayer('BCM_MDM_0014');
    } else if (statusOpen = 'C') {
        let params = {
            // trdPrnrCd: data.trdPrnrCd,
            // coCd: data.coCd,
            ...data
        }
        const urlParams = Object.keys(params).map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
        }).join('&');

        window.open("/BCM_MDM_0014?" + urlParams, "_blank"); //_self
    }
}