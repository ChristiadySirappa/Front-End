const id = document.querySelector('#id');
const fillname = document.querySelector('#fillname');
const exampleradios = [document.querySelector('#exampleRadios1'), document.querySelector('#exampleRadios2')];
const buttonshow = document.querySelector('.btn');
const buttonadd = document.querySelector('.btn2');
const search = document.querySelector('.search');
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

form.addEventListener ('submit', masukanNilaiTable);

function masukanNilaiTable(e) {
    e.preventDefault();
    let gender = exampleradios.map(nilai=>{
      if (nilai.checked) {
        return nilai.value;
      }
    })
    const baris = document.createElement('tr');
    const dataId = document.createElement('td');
    const dataName = document.createElement('td');
    const dataGender = document.createElement('td');
    const fakultas = document.createElement('td');
    const prodi = document.createElement('td');
    const deleteButton = document.createElement('button');

    dataId.innerText =id.value;
    dataName.innerText =fillname.value;
    dataGender.innerText = gender;
    fakultas.innerText = 'fakultas';
    prodi.innerText = 'prodi';

    baris.className = 'lists';

    const i = document.createElement('i');
    i.className = 'fas fa-user-minus';
    deleteButton.appendChild(i);
    deleteButton.classList.add('button-delete');

    baris.appendChild(dataId);
    baris.appendChild(dataName);
    baris.appendChild(dataGender);
    baris.appendChild(fakultas);
    baris.appendChild(prodi);
    baris.appendChild(deleteButton);

    tbody.appendChild(baris);

    
}
