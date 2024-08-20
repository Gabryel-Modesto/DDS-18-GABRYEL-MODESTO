let opcao = ""

function areaTriangulo() {
    let base = Number(prompt("Informe a base: "));
    let altura = Number(prompt("informe a aultura: "));
    return (base * altura) / 2;
};

function areaRetangulo() {
    let base = Number(prompt("Informe a base: "));
    let altura = Number(prompt("informe a aultura: "));
    return (base * altura);
};

function areaQuadrado() {
    let lado = Number(prompt("Infome o lado: "))
    return (lado * lado);
};

function areaTrapezio() {
   let baseMaior = Number(prompt("Informe a base maior: "));
    let baseMenor = Number(prompt("Informe a base menor: "));
    let altura = Number(prompt("Informe a altura: "));
    return ((baseMaior + baseMenor) * altura) / 2;
};

function areaCirculo() {
   let raio = Number(prompt("Informe o raio: "));
    return ( 3.14 * raio * raio);;
};

do {
    opcao = parseInt(prompt(
        "Escolha uma opção: " +
        "\n1 - área do triângulo " +
        "\n2 - área do retângulo " +
        "\n3 - área do quadrado " +
        "\n4 - área do trapézio " +
        "\n5 - área do círculo " +
        "\n6 - Fechar programa "
    ))

    switch (opcao) {
        case 1:
            alert("A área do triangulo é: " + areaTriangulo());
            break
        case 2:
            alert("A área do retangulo é: " + areaRetangulo());
            break
        case 3:
            alert("A área do quadrado é " + areaQuadrado());
            break
        case 4:
            alert("A área do trapezio é: " + areaTrapezio());
            break
        case 5:
            alert("A área do circulo é " + areaCirculo());
            break
        case 6:
            alert("Saindo...");
            break;
        default:
            alert("Escolha uma opção válida!");
            break;
    }

} while (opcao !== 6);