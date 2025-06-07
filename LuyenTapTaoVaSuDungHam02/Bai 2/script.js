let radius = +prompt('Nhap ban kinh');

function calA(a) {
    return alert('Dien tich: ' + a * a * Math.PI);
};

function calC(a) {
    return alert('Chu vi: ' + a * 2 * Math.PI);
};

calA(radius);
calC(radius);