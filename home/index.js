const formC = document.querySelector('#form-create');
const formL = document.querySelector('#form-login');
const loginInput = document.querySelector('#login-input');
const createInput = document.querySelector('#create-input');
const notification = document.querySelector('.notification');

formC.addEventListener('submit', async e=>{
    e.preventDefault();

    const respuesta = await fetch('http://localhost:3000/users',{
        method: 'GET'
    });
    const users = await respuesta.json()

    const user = users.find(user=>user.nombre=== createInput.value)
    //console.log(user);
    
    //validaciones
    if(!createInput.value){
        //el campo esta vacio
        console.log("el usuario no puede estar vacio");
        notification.innerHTML = "el usuario no puede estar vacio"
        notification.classList.add('show-notification')
        setTimeout(()=>{
            notification.classList.remove('show-notification')
        },2000);
    }else if(user){
        //exsiste este usuario
        //console.log("si existe")
        notification.innerHTML = "El nombre de usuario no esta disponible"
        notification.classList.add('show-notification')
        setTimeout(()=>{
            notification.classList.remove('show-notification')
        },2000);
    }else{
        await fetch ('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type':'application/json'
        },
        body:JSON.stringify({nombre:createInput.value})
        });
        notification.innerHTML = `El usuario ${createInput.value} ha sido creado con exito`;
        notification.classList.add('show-notification');
        setTimeout(()=>{
            notification.classList.remove('show-notification')
        },2000);

        createInput.value ='';
    }

})

formL.addEventListener('submit', async e=>{
    e.preventDefault();

    const respuesta=await fetch('http://localhost:3000/users',{
        method: 'GET',
    });

    const users = await respuesta.json();

    const user = users.find(user=>user.nombre === loginInput.value);

    if (!user){
        //si no existe
        notification.innerHTML = "Nombre de usuario incorrecto";
        notification.classList.add('show-notification');
        setTimeout(()=>{
            notification.classList.remove('show-notification')
        },2000);
    }else{
        localStorage.setItem('user',JSON.stringify(user));
        window.location.href = '../tareas/tareas.html';
    }
})