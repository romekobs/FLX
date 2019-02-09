let Login = prompt('Enter here your login:');
let time = new Date().getHours();
if (Login === '' || Login === null) {
    alert('Canceled.');
} else if (Login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (Login === 'User' || Login === 'Admin') {
    let Password = prompt('Enter here your password:');
    if (Password === '' || Password === null) {
        alert('Canceled.');
    } else if (Login === 'User' && Password === 'UserPass') {
        if (time < 20) {
            alert('Good day, dear User!');
        } else {
            alert('Good evening, dear User!');
        }
    } else if (Login === 'Admin' && Password === 'RootPass') {
        if (time < 20) {
            alert('Good day, dear Admin!');
        } else {
            alert('Good evening, dear Admin!');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}