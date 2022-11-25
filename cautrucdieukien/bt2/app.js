let kv = 'KV1'

tinhDiem = () => {
    let toan = parseInt(document.getElementById("toan").value);
    let van = parseInt(document.getElementById("van").value);
    let anh = parseInt(document.getElementById("anh").value);
    let result = document.getElementById('result');
    let point = ''

    let check = verifyInput(toan, van, anh);
    if (check) {
        switch (kv) {
            case 'KV1':
                point = toan + van + anh + 0.75
                break;
            case 'KV2-NT':
                point = toan + van + anh + 0.5
                break;
            case 'KV2':
                point = toan + van + anh + 0.25
                break;
            case 'KV3':
                point = toan + van + anh
                break;
            default:
                break;
        }
    }
    else {
        alert("Missing prams !!!")
    }

    result.innerHTML = point
}

verifyInput = (a, b, c) => {
    if (!a || !b || !c) {
        return false;
    } else {
        return true;
    }
}
onchangeSelect = (event) => {
    kv = event.target.value;
}

