const id = document.querySelector('#id');
const fillname = document.querySelector('#fillname');
const exampleradios = [document.querySelector('#exampleRadios1'), document.querySelector('#exampleRadios2')];
const buttonshow = document.querySelector('.btn');
const buttonadd = document.querySelector('.btn2');
const search = document.querySelector('.search');
const form = document.querySelector('#form');
form.addEventListener ('submit', function (e) {
    e.preventDefault ()
    console.log(id.value)
}
