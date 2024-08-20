const medida = prompt("Insira uma unidade de medida: ");
const unidade = prompt(
    "Para qual unidade de medida deseja converter? " +
    "\n Milimetros (mm)" +
    "\n Centimetros (cm)" +
    "\n Decimetros (dm)" +
    "\n Decâmetros (dam)" +
    "\n Hectômetros (hm)" +
    "\n Quilometros (km)"
);

switch (unidade) {
    case "1":
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
        break
    case 2:
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
        break
    case 3:
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
        break
    case 4:
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
        break
    case 5:
        alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
        break
    case 6:
        alert("Resultado: " + medida + "m = " + medida / 1000 + "Km");
        break
    default:
        alert("Opção inválida!");
        break
}