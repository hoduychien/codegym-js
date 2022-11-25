// let a = prompt("a: ");
// let b = prompt("b: ");

// result = (a + b < 4) ? 'Below' : 'Over';

// console.log(result)

let message;
let login = prompt();


message = login == 'Employee' ? 'Hello' :
    login == 'Director' ? 'Greetings' :
        login == '' ? 'No login' : ''

alert(message)