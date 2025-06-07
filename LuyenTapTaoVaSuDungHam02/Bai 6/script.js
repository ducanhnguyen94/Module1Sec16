let num = +prompt('Nhap so');

function checkPositiveInt(val) {
    if (Number.isInteger(val)) {
        if (val > 0) {
            return alert(val + ' la so nguyen duong');
        } else {
            return alert(val + ' khong phai la so nguyen duong');
        };
    } else {
        return alert(val + ' khong phai la so nguyen duong');
    }
};

checkPositiveInt(num);