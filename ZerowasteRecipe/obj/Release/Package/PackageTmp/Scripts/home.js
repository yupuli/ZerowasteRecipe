 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password', '');
    while (testV < 3) {
        if (!pass1) {
            history.go(-1);
            break;
        }
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
    passWord();
}      