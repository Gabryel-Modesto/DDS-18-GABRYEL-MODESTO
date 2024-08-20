function register(ev) {
    console.log(ev)

    const sectionElement = ev.currentTarget.parentNode;

    const userName = sectionElement.children.userName.value;
    const password = sectionElement.children.password.value;
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value;

    if (password === passwordConfirmation) {
        alert('Usuário ' + userName + ' registrado!');
    } else {
        alert('As senhas não são válidas');
    };
};



const button = document.getElementById('register-button');
//Adiciona eventos
button.addEventListener('click', register);

function removeListener(){
    //Remove eventos 
    button.removeEventListener('click', register);
    alert('Event removed');
};
//mais de um evento
button.addEventListener('mouseover', function (ev){
    console.log(ev.currentTarget);
});