var count = 0;


function slideShow() {
    var s = document.getElementById('slides').children;
    switch (count) {
        case 0:
            s[1].classList.add('display');
            s[2].classList.remove('display');
            break;
        case 1:
            s[2].classList.add('display');
            s[3].classList.remove('display');
            break;
        case 2:
            s[3].classList.add('display');
            s[4].classList.remove('display');
            break;
        case 3:
            s[4].classList.add('display');
            s[5].classList.remove('display');
            break;
        case 4:
            s[5].classList.add('display');
            s[6].classList.remove('display');
            break;
        case 5:
            s[6].classList.add('display');
            s[7].classList.remove('display');
            break;
        case 6:
            s[7].classList.add('display');
            s[1].classList.remove('display');
            count = -1;
            break;
        default:
            count = -1;
            break;
    }
    count++;
}

function slideShowLeft() {
    var s = document.getElementById('slides').children;
    switch (count) {
        case 0:
            s[1].classList.add('display');
            s[7].classList.remove('display');
            count = s.length - 2;
            break;
        case 1:
            s[2].classList.add('display');
            s[1].classList.remove('display');
            break;
        case 2:
            s[3].classList.add('display');
            s[2].classList.remove('display');
            break;
        case 3:
            s[4].classList.add('display');
            s[3].classList.remove('display');
            break;
        case 4:
            s[5].classList.add('display');
            s[4].classList.remove('display');
            break;
        case 5:
            s[6].classList.add('display');
            s[5].classList.remove('display');
            break;
        case 6:
            s[7].classList.add('display');
            s[6].classList.remove('display');
            break;
        default:
            count = s.length - 2;
            break;
    }
    count--;
}
