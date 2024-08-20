const vagas = [];

function listarVagas() {
    const vagaT = vagas.reduce(function (final, vaga, indice) {
        final += indice + " - ";
        final += vaga.nome
        final += " (" + vaga.candidatos.length + " candidatos)\n";
        return final
    }, "");
    alert(vagaT);
};

function novaVaga() {
    const nome = prompt("Informe o nome para a vaga: ");
    const descricao = prompt("Informe a descrisão da vaga: ");
    const dataLimite = prompt("Informe uma data limite para a vaga: ");

    const confimacao = confirm(
        "Deseja criar uma nova nava com essas informações? " +
        "Nome: " + nome +
        "Descricão: " + descricao +
        "Data Limite: " + dataLimite
    );

    if (confimacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga);
        alert("Vaga Criada")
    } else {
        alert("A vaga não foi criada");
    };
};

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ");
    if(indice >= vagas.length || indice < 0){
        alert("Índice inválido");
        return 
    } 

    const vaga = vagas[indice];

    const candidatosT = vaga.candidatos.reduce(function (final, candidato) {
        return final + "\n - " + candidato
    }, "");
    alert("Vaga n° " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos Inscritos: " + candidatosT
    );
};

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a)");
    const indice = prompt("Informe o índice da vaga que o(a) candidato(a) deseja se inscrever: ");
    const vaga = vagas[indice];

    const confimacao = confirm(
        "Deseja inscrever o canditad(a) " + candidato + " na vaga " + indice + " ?" +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "Data limite: " + vaga.dataLimite
    );
    if (confimacao) {
        vaga.candidato.push[candidato];
        alert("Inscrição realizada.");
    } else {
        alert("A inscrição não foi realizada!");
    };
};

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir: ");
    const vaga = vagas[indice];

    const confimacao = confirm(
        "Tem certeza que deseja excluir a vaga: " + indice + "?" +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "Data limite: " + vaga.dataLimite
    );

    if(confimacao) {
        vaga.splice(indice, 1);
        alert("Vaga excluída!");
    } else (
        alert("A vaga não foi excluída!")
    );
};

function exibirMenu(){
    const opcao = prompt(
        "Cadastro de Vagas de emprego" + 
        "\nEscolha uma das opções. " + 
        "\n1 - Listar vagas disponíveis. " + 
        "\n2 - Criar uma nova vaga. " +
        "\n3 - Visualizar uma vaga. " +
        "\n4 - Inscrever um candidato. " + 
        "\n5 - Excluir uma vaga. " + 
        "\n6 - Sair."
    );
    return opcao
};

function executar (){
    let opcao = ""

    do{
        opcao = exibirMenu
    
    switch (opcao) {
        case 1:
            listarVagas
            break;
        case 2:
            novaVaga
            break;
        case 3:
            exibirVaga
            break;
        case 4:
            inscreverCandidato
            break;
        case 5:
            excluirVaga
            break;
        case 6:
            alert("Encerrado");
            break;
        default:
            alert("Opção inválida!");    
    };

    }while(opcao !== 6);
};