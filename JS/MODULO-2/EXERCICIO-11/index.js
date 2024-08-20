function addPlayer() {
    const position = document.getElementById('position').value;
    const name = getElementById('name').value;
    const number = document.getElementById('number').value;

    const confirmation = confirm("Escalar " + name + " como " + position + " ?");

    if (confirmation) {
        const teamList = document.getElementById('teamList');
        const playerItem = document.createElement('li');

        playerItem.id = 'player- ' + number;
        playerItem.innerText = position + " : " + name + " (" + number + ")";
        teamList.appendChild(playerItem);

        //limpando o console
        document.getElementById('position').value;
        document.getElementById('name').value;
        document.getElementById('number').value;
    };

};

function removePlayer() {
    //pegando o ID
    const number = document.getElementById('numberToRemove').value;
    const playerToRemove = document.getElementById('player- ' + number);

    const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + " ? ");

    if (confirmation) {
        //removendo da lista
        playerToRemove.remove();
        //Limpar o console
        document.getElementById('numberToRemove').value = '';
    };
};




