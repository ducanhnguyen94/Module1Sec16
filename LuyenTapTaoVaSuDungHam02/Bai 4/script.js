let value = +prompt('Nhap so');

function checkNum(val) {
    if (Number.isNaN(val)) {
        return alert('False');
    } else {
        return alert('True');
    };
};

checkNum(value);