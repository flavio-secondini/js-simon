// genero 5 numeri casuali da mostrare all'utente per 5 secondi
$(document).ready(function () {
  randomNumbers(5, 1000)
  setTimeout(function () {
    $("#numeri-generati").hide()
    $("#linea-1").hide()
    // dopo averli nascosti, inizio il countdown di 30 secondi
    var timer = 3
    var countdown = setInterval(function () {
      $("#countdown").html(timer)
      timer--
      if (timer === -1) {
        clearInterval(countdown)
        $("#linea-2").hide()
        // chiedo di inserire i 5 numeri
        questions()
      }
    }, 1000)
  }, 5000)
})

var numeriRandom = []
var numeriRandomLista = []
var risposteEsatte = []

// FUNZIONI

function randomNumbers(quantity, max) {
  for (var i = 0; i < quantity; i++) {
    numeriRandom.push(+ (Math.floor(Math.random() * max) + 1))
  }
  for (var i = 0; i < numeriRandom.length; i++) {
    numeriRandomLista.push("<li>" + numeriRandom[i] + "</li>")
  }
  $("#numeri-generati").html(numeriRandomLista)
  console.log(numeriRandom);
}

function questions() {
  for (var i = 0; i < 5; i++) {
    var risposta = parseInt(prompt("inserisci uno dei numeri"))
    if (numeriRandom.includes(risposta)) {
      risposteEsatte.push(risposta)
    }
  }
  $("#numeri-generati").show()
  alert("Hai indovinato i numeri: " + risposteEsatte + " per un totale di " + risposteEsatte.length + " risposte esatte.")
}
