const id = document.querySelector('#id');
const fillname = document.querySelector('#fillname');
const exampleradios = [document.querySelector('#exampleRadios1'), document.querySelector('#exampleRadios2')];
const buttonshow = document.querySelector('.btn');
const buttonadd = document.querySelector('.btn2');
const search = document.querySelector('.search');
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const exampleformcontrolselect = [document.querySelector('#exampleformcontrolselect1'), document.querySelector('#exampleformcontrolselect2')];

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
    i.className = 'fas fa-minus';
    deleteButton.appendChild(i);
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.classList.add('text-white');
    deleteButton.classList.add('btn-sm');
    deleteButton.classList.add('mx-auto');

    baris.appendChild(dataId);
    baris.appendChild(dataName);
    baris.appendChild(dataGender);
    baris.appendChild(fakultas);
    baris.appendChild(prodi);
    baris.appendChild(deleteButton);
    deleteButton.addEventListener ('click', function (event) {
        const confirmasi = confirm("Apakah anda ingin menghapus ?")
        const btndell = event.target;
        const parent = btndell.parentElement;
        if (confirmasi == true){
            if (btndell.classList[0] == "btn")
            {
                parent.remove()
            }  
        }
        else 
        {
            alert("Batal")
        }
        
    })
    tbody.appendChild(baris);
    id.value = ""
    fillname.value = ""
    exampleradios.value = ""
}
    buttonshow.addEventListener("click",()=> {
        if (form.style.display == "none")
        {
            form.style.display = "block"
            buttonshow.innerText = "sembunyikan"
        }
        else
        {
            form.style.display = "none"
            buttonshow.innerText = "tampilkan"
        }
    })
    search.addEventListener ('keyup', function() {
        const row = tbody.querySelectorAll("tr")
        const impostor = this.value.toUpperCase()
        console.log(impostor)
        row.forEach(i=>{
            const blue = i.getElementsByTagName('td')[1];
            if (blue.textContent.toUpperCase().includes(impostor)>0)
            {
                i.style.display = ""
            }
            else 
            {
                i.style.display = "none"
            }
        })
    })