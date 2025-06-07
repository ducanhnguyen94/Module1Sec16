let num = +prompt('Nhap so');

function calFactorial(val) {
    let fac = 1;
    for (let i = 1; i <= val; i++) {
        fac *= i;
    };
    return alert('Giai thua cua so ' + num + ': ' + fac);
};

calFactorial(num);