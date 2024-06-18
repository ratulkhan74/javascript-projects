const body = document.querySelector('body');
const title = document.getElementById('title');
const btns = document.querySelectorAll('.button');

function changeBgColor(color, colorTitle, titleBg) {
    body.style.backgroundColor = color;
    title.textContent = colorTitle;
    if (body.style.backgroundColor === color) {
        title.style.backgroundColor = titleBg;
    }
    localStorage.setItem('bgColor', color);
    localStorage.setItem('colorTitle', colorTitle);
    localStorage.setItem('colorTitleColor', titleBg);
}

const savedBgColor = localStorage.getItem('bgColor');
const savedBgColorTitle = localStorage.getItem('colorTitle');
const savedBgColorTitleColor = localStorage.getItem('colorTitleColor');
if (savedBgColor) {
    changeBgColor(savedBgColor, savedBgColorTitle, savedBgColorTitleColor);
    navigator.clipboard.readText
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let id = e.target.id;
        switch (id) {
            case 'green':
                changeBgColor('green', 'Green', '#036e03');
                break;
            case 'yellow':
                changeBgColor('yellow', 'Yellow', '#848403');
                break;
            case 'blue':
                changeBgColor('blue', 'Blue', '#0000d0');
                break;
            case 'black':
                changeBgColor('black', 'Black', '#070707');
                break;
            case 'red':
                changeBgColor('red', 'Red', '#e10101');
                break;
            default:
                break;
        }
    })
});