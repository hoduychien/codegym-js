let result = document.querySelector("#result");
let a = 0
let b = 5
let phepToan = ''
numberClick = (number) => {
    result.value = result.value + number;
}

clearResults = () => {
    result.value = ''
}

calculate = (calc) => {
    if (calc == "calc") {
        b = parseFloat(result.value);
        result.value = ''
        switch (phepToan) {
            case `add`:
                result.value = a + b
                break;
            case `sub`:
                result.value = a - b
                break;
            case `mul`:
                result.value = a * b
                break;
            case `div`:
                result.value = a / b
                break;
            default:
                break;
        }
    }
    else {
        a = parseFloat(result.value);
        phepToan = calc;
        result.value = ''
    }
}