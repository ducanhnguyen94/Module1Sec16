let num = +prompt('Nhap so can kiem tra');

function isPrime(val) {
    let count = 0;

    for (let i = 1; i <= val; i++) {
        if (val % i == 0) {
            count++;
        };
        if (count > 2) {
            return alert('Day khong phai la so nguyen to');
        }
    };

    if (count == 2) {
        return alert('Day la so nguyen to');
    } else {
        return alert('Day khong phai la so nguyen to');
    };

};

isPrime(num);