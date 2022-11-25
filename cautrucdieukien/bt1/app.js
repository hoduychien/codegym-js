xemGia = () => {
    let data = document.getElementById("input").value;
    let result = document.getElementById('result');
    let price = ''
    if (data === 'Ổi' || data === 'Dưa Hấu') {
        price += "20000 VNĐ/kg"
    }
    else if (data === 'Táo' || data === 'Xoài') {
        price += "30000 VNĐ/kg"
    }
    else if (data === 'Cam' || data === 'Chôm Chôm') {
        price += "40000 VNĐ/kg"
    }
    else if (data === 'Măng Cụt') {
        price += "50000 VNĐ/kg"
    }
    else {
        price += ""
    }

    result.innerHTML = price
}