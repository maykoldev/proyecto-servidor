const user = JSON.parse(localStorage.getItem('user'));
//console.log(user);

const formulario = document.querySelector('#form-todos');
const lista = document.querySelector('#todos-list');
const inputF = document.querySelector('#form-input');
const cerrarBtn = document.querySelector('#cerrar-btn');


if (!user) {
    //caso de que el user no este en el LS
    window.location.href = '../home/index.html';
}

formulario.addEventListener('submit', async e =>{
    e.preventDefault();

    await fetch('http://localhost:3000/tareas', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text:inputF.value,nombre:user.nombre})
    })

    obtenerLista();
})

const obtenerLista = async()=> {
    const respuesta = await fetch("http://localhost:3000/tareas",{
    method:'GET'
    });
    const list=await respuesta.json();
    const userList = list.filter(lista=>lista.nombre ===user.nombre);
    //console.log(userList)

    userList.forEach(i=>{
        const listado = document.createElement('li');
        listado.innerHTML =`
        <li class="todo-item">
        <button class="delete-btn">&#10006;</button>
        ${i.text}
        <button class="check-btn">&#10003;</button>
      </li>
        
        ` 
        lista.appendChild(listado);
    })

}