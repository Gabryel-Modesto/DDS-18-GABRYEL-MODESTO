let speed = 0


// POR CONTA DA SINTAXE, O  DO SEMPRE IRÁ PRIMEIRO QUE O WHILE, ATÉ QUANDO O WHILE FOR FALSO;

do {
    alert("A velocidade do veiculo é " + speed + " km/h");
    speed -= 20
} while (speed > 0){
    alert("Velocidade final: " + speed + " km/h");
}