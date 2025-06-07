let numArr = [];

for (let i = 0; i < 10; i++) {
    let num = +prompt('Nhap so');
    numArr.push(num);
};

function reverse(arr) {
    let reverseArr = [];
    for (let i = 0; i < arr.length; i++) {
        reverseArr.unshift(arr[i]);
    };
    return alert(reverseArr);
};

reverse(numArr);