const result = document.getElementById('result');
const btn = document.getElementById('button');

function checkVal(a,b) {
    if (a > b) {
        return result.innerHTML = 'So a lon hon so b';
    } else {
        return result.innerHTML = a + b;
    };
};

btn.addEventListener('click', () => {
    let firstNum = +prompt('Nhap so thu nhat');
    let secondNum = +prompt('Nhap so thu hai');

    checkVal(firstNum, secondNum);
})