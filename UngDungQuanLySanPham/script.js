const add = document.getElementById('add');
const table = document.getElementById('table');
const newPro = document.getElementById('newProduct');

let proArr = [];

const deletePro = index => {
    let deleteName = prompt('Nhap ten muon xoa');
    proArr.splice(index, 1);
    getData();
}

const edit = index => {
    let newName = prompt('Nhap ten moi');
    while (proArr.includes(newName)) {
        newName = prompt('Nhap lai ten khac. Ten nay da co');
    };
    proArr[index] = newName;   
    getData();
};

const addPro = () => {
    if (proArr.includes(newPro.value)) {
        return;
    } else {
        proArr.push(newPro.value);
    };
};

const getData = () => {
    let html = '';
    proArr.forEach(el => {
        html += `
        <tr>
            <td>${el}</td>
            <td>
                <button onclick="edit(${proArr.indexOf(el)})">Edit</button>
            </td>
            <td>
                <button onclick="deletePro(${proArr.indexOf(el)})">Delete</button>
            </td>
        </tr>
        `;
    });
    table.innerHTML = html;
};

add.addEventListener('click', () => {
    addPro();
    getData();
})



