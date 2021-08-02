const moment = require("./moment")

let departureDate = prompt("Digite a data de partida: (formato DD/MM/YYYY)")

let departureDate = moment(departureDate, "DD/MM/YYYY")

let today = moment()

let dateDifference = today - departureDate

let choose = prompt(
  "Escolha como gostaria de exibir o tempo de partida:\n1- Segundos\n2- Minutos\n3- Horas\n4 - Dias"
)

if (choose == 1) {
  let secondsDeparture = Math.round(dateDifference / 1000)
  alert("Tempo de vôo: " + secondsDeparture + " segundos!")
} else if (choose == 2) {
  let minutesDeparture = Math.round(dateDifference / 1000 / 60)
  alert("Tempo de vôo: " + minutesDeparture + " minutos!")
} else if (choose == 3) {
  let hourDeparture = Math.round(dateDifference / 1000 / 3600)
  alert("Tempo de vôo: " + hoursDeparture + " horas!")
} else if (choose == 4) {
  let dayDeparture = Math.round(dateDifference / 3600 / 24)
  alert("Tempo de vôo: " + dayDeparture + " horas!")
} else {
  alert("Opção inválida!")
}
