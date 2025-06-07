let chaArr = [];

for (let i = 0; i < 10; i++) {
    let cha = prompt('Nhap ky tu');
    chaArr.push(cha);
};

let cha = prompt('Nhap ki tu can tim');

function findCha(arr, val) {
    if (arr.includes(val)) {
        let count = 0;
        arr.forEach(el => {
            if (el === val) {
                count++;
            };
        });
        return alert('So lan xuat hien: ' + count);
    } else {
        return alert('-1');
    };
};

findCha(chaArr, cha);