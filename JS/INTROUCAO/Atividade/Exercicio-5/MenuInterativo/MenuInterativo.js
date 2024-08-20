let escolha;

while (true) {
    prompt("Escolha uma opção: " +
        "\n1 - Garfo " +
        "\n2 - Colher " +
        "\n3 - Patro " +
        "\n4 - Copo " +
        "\n5 - Sair");

    switch (escolha) {
        case "1":
            alert("Você escolheu um garfo");
            break
        case "2":
            alert("Você escolheu uma colher");
            break
        case "3":
            alert("Você escolheu um patro");
            break
        case "4":
            alert("Você escolheu um Copo");
            break
        case "5":
            alert("Você escolheu Sair");
            break
            default:
                alert("Escolha um número válido");
    }
    if(escolha === "5")
        break


}