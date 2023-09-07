const user = JSON.parse(localStorage.getItem('user'));
//console.log(user);

if (!user) {
    //caso de que el user no este en el LS
    window.location.href = '../home/index.html';
}