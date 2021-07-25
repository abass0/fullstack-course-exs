let nomePiloto = prompt ("Piloto, qual seu nome?")
alert("Bem vindo, " + nomePiloto)

let velocity = 0

let shipVelocity = prompt ("Qual é a velocidade desejada para a nave?")

confirm("A velocidade a ser utilizada é de " + shipVelocity + " correto?")

velocity = shipVelocity

if (shipVelocity < 0){
    alert("Nave está parada. Considere aumentar a velocidade para prosseguir")
}else if (shipVelocity < 40){
    alert("Você está devagar, podemos ir mais rápido!")
}else if (shipVelocity >= 40 && shipVelocity < 80){
    alert("Parece uma boa velocidade, podemos manter!")
}else if (shipVelocity >= 80 && shipVelocity < 100){
    alert("Velocidade alta!")
}else if (shipVelocity >=100){
    alert("Velocidade muito alta, piloto automatico ativado!")
}

alert("Piloto " + nomePiloto + " está utilizando uma velocidade de " + shipVelocity)
