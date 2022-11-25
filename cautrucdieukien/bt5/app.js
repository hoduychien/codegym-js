convertCurrency = () => {
    let amount = parseFloat(document.getElementById('amount').value)
    let beforeCurrency = document.getElementById('beforeCurrency').value;
    let affterCurrency = document.getElementById('affterCurrency').value;
    let ketqua = document.getElementById('ketqua');
    let result = ''
    if (amount) {
        if (beforeCurrency === 'vi' && affterCurrency === 'en') {
            result = (amount / 23000) + ' USD'
        }
        else if (beforeCurrency === 'vi' && affterCurrency === 'vi') {
            result = (amount) + ' VND'
        }

        else if (beforeCurrency === 'en' && affterCurrency === 'vi') {
            result = (amount * 23000) + ' VND'
        }

        else if (beforeCurrency === 'en' && affterCurrency === 'en') {
            result = (amount) + ' USD'
        }
        else {
            result = (amount) + ''
        }
    } else {
        alert('Missing parameters !!!')
    }
    ketqua.innerHTML = result

}