var count = 0;

function slideShow() {
    var s = document.getElementById('slides').children;
    console.log(s);
    switch (count) {
        case 0:
            count = 1;
            break;
        case 1:
            s[0].classList.add('display');
            s[1].classList.remove('display');
            count = 2;
            break;
        case 2:
            s[1].classList.add('display');
            s[2].classList.remove('display');
            count = 3;
            break;
        case 3:
            s[2].classList.add('display');
            s[3].classList.remove('display');
            count = 4;
            break;
        case 4:
            s[3].classList.add('display');
            s[4].classList.remove('display');
            count = 5;
            break;
        case 5:
            s[4].classList.add('display');
            s[5].classList.remove('display');
            count = 6;
            break;
        case 6:
            s[5].classList.add('display');
            s[6].classList.remove('display');
            count = 7;
            break;
        case 7:
            s[6].classList.add('display');
            s[7].classList.remove('display');
            count = 8;
            break;
        case 8:
            s[7].classList.add('display');
            s[0].classList.remove('display');
            count = 1;
            break;
        default:
            break;
    }
    console.log(count);
    setTimeout(slideShow, 3000);
}
