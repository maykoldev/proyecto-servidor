const user = JSON.parse(localStorage.getItem('user'));
//console.log(user);

const formulario = document.querySelector('#form-todos');
const lista = document.querySelector('#todo-list');
const inputF = document.querySelector('#form-input');
const cerrarBtn = document.querySelector('#cerrar-btn');

if (!user) {
    //caso de que el user no este en el LS
    window.location.href = '../home/index.html';
}