const result = document.getElementById('result');
const btn = document.getElementById('button');

function addVal(val) {
    val++;
    return result.innerHTML = val;
};

btn.addEventListener('click', () => {
    let num = +prompt('Nhap gia tri');
    addVal(num);
})