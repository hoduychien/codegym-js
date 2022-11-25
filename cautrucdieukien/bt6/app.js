let chuoiCan = ''
let chuoiChi = ''

convertCurrency = () => {
    let year = parseFloat(document.getElementById('year').value)
    let ketqua = document.getElementById('ketqua');

    ketqua.innerHTML = ''
    chuoiCan = ''
    chuoiChi = ''


    let can = year % 10;
    let chi = year % 12;

    if (year) {
        checkCan(can);
        checkChi(chi);
    } else {
        alert('Missing parameters !!!')
    }
    ketqua.innerHTML = chuoiCan + ' ' + chuoiChi

}

checkCan = (a) => {
    switch (a) {
        case 0:
            chuoiCan += 'Canh'
            break;
        case 1:
            chuoiCan += 'Tân'
            break;
        case 2:
            chuoiCan += 'Nhâm'
            break;
        case 3:
            chuoiCan += 'Quý'
            break;
        case 4:
            chuoiCan += 'Giáp'
            break;
        case 5:
            chuoiCan += 'Ất'
            break;
        case 6:
            chuoiCan += 'Bính'
            break;
        case 7:
            chuoiCan += 'Đinh'
            break;
        case 8:
            chuoiCan += 'Mậu'
            break;
        case 8:
            chuoiCan += 'Kỷ'
            break;

        default:
            break;
    }
}
checkChi = (b) => {
    switch (b) {
        case 0:
            chuoiChi += 'Thân'
            break;
        case 1:
            chuoiChi += 'Dậu'
            break;
        case 2:
            chuoiChi += 'Tuất'
            break;
        case 3:
            chuoiChi += 'Hợi'
            break;
        case 4:
            chuoiChi += 'Tý'
            break;
        case 5:
            chuoiChi += 'Sửu'
            break;
        case 6:
            chuoiChi += 'Dần'
            break;
        case 7:
            chuoiChi += 'Mẹo'
            break;
        case 8:
            chuoiChi += 'Thìn'
            break;
        case 9:
            chuoiChi += 'Tỵ'
            break;
        case 10:
            chuoiChi += 'Ngọ'
            break;

        default:
            break;
    }
}



