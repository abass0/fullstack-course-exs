let distance = prompt("Digite a distância em anos-luz:");
let conversionOptions = prompt(
  "Escolha uma das opções de unidade para conversão:\n\n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)\n"
);

let chosenConversion; //opção escolhida para conversão 
let convertedValue; //resultado da conversão
switch (conversionOptions) {
  case "1":
    chosenConversion = "Parsec (pc)";
    convertedValue = distance * 0.306601;
    break;
  case "2":
    chosenConversion = "Unidade Astronômica (AU)";
    convertedValue = distance * 63241.1;
    break;
  case "3":
    chosenConversion = "Quilômetros (km)";
    convertedValue = distance * (9.5 * Math.pow(10, 12));
    break;
}

if (conversionOptions > 0 && conversionOptions <= 3) {
  alert(
    "Distância em Anos-luz: " +
      distance +
      "\nDistância convertida para " +
      chosenConversion +
      ": " +
      convertedValue
  );
} else {
  alert(
    "Distância em Anos-luz: " +
      distance +
      "\nUnidade não identificada: Conversão fora do escopo"
  );
}
