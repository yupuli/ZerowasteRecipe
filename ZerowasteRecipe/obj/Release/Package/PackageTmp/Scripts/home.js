//the function of password protected website
function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password', '');
    while (testV < 3) {
        if (!pass1) {
            //if wrong, go back to the previous page
            history.go(-1);
            break;
        }
        //if the password is correct, turen to index page
        else if (pass1.toLowerCase() == "powerhouse") {
            alert('You Got it Right!');
            window.location('Home/Index');
            break;
        }
        else
            testV += 1;
        var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.', 'Password');
    }
    if (pass1.toLowerCase() != "password" & testV == 3)
        history.go(-1);
    return "";
}
window.onload = function () {
    //passWord();
}     