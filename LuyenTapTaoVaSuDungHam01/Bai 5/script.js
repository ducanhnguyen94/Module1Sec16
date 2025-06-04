const result = document.getElementById('result');
const btn = document.getElementById('button');

let starArr = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let zodiacArr = ['Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

function matchZodiac(name) {
    let index = starArr.indexOf(name);
    if (index == -1) {
        return result.innerHTML = 'Khong co ten trong nhom';
    } else {
        return result.innerHTML = zodiacArr[index];
    };
};

btn.addEventListener('click', () => {
    let starName = prompt('Nhap ten');
    matchZodiac(starName);
})