tinhSoNgay = () => {
    let input = parseInt(document.getElementById('input').value)
    let kq = document.getElementById('ketqua')
    let res = ''

    switch (input) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            res += '31 ngày'
            break;
        case 2:
            res += '28 hoặc 29 ngày'
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            res += '30 ngày'
            break;

        default:
            break;
    }
    kq.innerHTML = `Thang ${input} co ${res}`
}