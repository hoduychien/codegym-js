let userName = prompt("Who's there?", '');
let pass = prompt('Password?', '');

if (userName == 'Admin') {
    //code vào đây
} else if (userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}


if (pass == 'TheMaster') {
    alert('Welcome!');
} else if (pass == null) {
    alert('Canceled.');
} else {
    alert('Wrong password');
}