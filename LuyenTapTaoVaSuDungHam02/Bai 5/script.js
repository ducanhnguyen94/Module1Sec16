let num1 = +prompt('Nhap so');
let num2 = +prompt('Nhap so');
let num3 = +prompt('Nhap so');

function smallestInt(a,b,c) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(a)) {
        return alert('Nhap 3 so nguyen!') ;
    } else {
        if (a < b) {
            if (a < c) {
                return alert(a + ' la so nguyen be nhat');
            } else {
                return alert(c + ' la so nguyen be nhat');
            };
        } else {
            if (b < c) {
                return alert(b + ' la so nguyen be nhat');
            } else {
                return alert(c + ' la so nguyen be nhat');
            }
        };
    };
};

smallestInt(num1, num2, num3);