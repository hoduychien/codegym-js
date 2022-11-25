tinhBMI = () => {
    let canNang = parseFloat(document.getElementById('can-nang').value)
    let chieuCao = parseFloat(document.getElementById('chieu-cao').value)
    let kq = document.getElementById('ketqua')
    let bmi = canNang / (chieuCao ** 2)
    let chuoi = ''

    if (bmi > 40) {
        chuoi += 'Béo phì độ III'
    }
    else if (bmi >= 35) {
        chuoi += 'Béo phì độ II'
    }
    else if (bmi >= 30) {
        chuoi += 'Béo phì độ 1'
    }
    else if (bmi >= 25) {
        chuoi += 'Thừa cân'
    }
    else if (bmi >= 18.5) {
        chuoi += 'Bình thường'
    }
    else if (bmi >= 17) {
        chuoi += 'Gầy độ I'
    }
    else if (bmi >= 16) {
        chuoi += 'Gầy độ II'
    }
    else if (bmi < 16) {
        chuoi += 'Gầy độ III'
    }
    else {
        chuoi += ''
    }
    kq.innerHTML = chuoi

}